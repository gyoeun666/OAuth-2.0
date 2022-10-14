const express = require("express");
const validateToken = require("../middlewares/user");
const userController = require("../controllers/user");

const router = express.Router();

module.exports = router;
