const userService = require("../services/user");

const oauth = async (req, res) => {
  const { snsId, email, nick } = req.body;

  const Oauth = await userService.oauth(snsId, email, nick);
  res.status(200).json({ message: "LOGIN_SUCCESS!" });
};

module.exports = { oauth };
