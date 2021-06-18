const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/middlewares');
const authController = require('../Controllers/auth.controllers');

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);
router.route('/check').get(authController.checkJWT);

// Rutas protegidas por el middleware
router.use(middleware.check);

router.route('/temp').get(authController.temp);

module.exports = router;
