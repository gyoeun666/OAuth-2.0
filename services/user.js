const userDao = require("../models/user");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const oauth = async (snsId, email, nick) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (profile, done) => {
        const exUser = await userDao.findOne({
          where: { snsId: profile.id, provider: "google" },
        });

        if (exUser) {
          done(null, exUser);
        } else {
          const newUser = await userDao.createUser({
            email: profile?.email[0].value,
            nick: profile.displayName,
            snsId: profile.id,
            provider: "google",
          });
          done(null, newUser);
        }
      },
    ),
  );
};

module.exports = { oauth };
