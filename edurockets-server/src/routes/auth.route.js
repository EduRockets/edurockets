const express = require('express');
const router = express.Router();

const authController = require('../Controllers/auth.controllers');

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);

router.use(authController.check);

router.route('/temp').get(authController.temp);

module.exports = router;
