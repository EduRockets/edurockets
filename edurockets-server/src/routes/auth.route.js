const express = require("express");
const authController = require("../Controllers/auth.controllers");
const router = express.Router();

const auth = require("../middlewares/middlewares.js");

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

router.use(authController.secure);

router.route("/temp").get(authController.temp);

module.exports = router;
