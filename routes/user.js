const express = require("express");
const validateToken = require("../middlewares/user");
const userController = require("../controllers/user");
const userService = require("../services/user");
const passport = require("passport");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  },
);

module.exports = router;
