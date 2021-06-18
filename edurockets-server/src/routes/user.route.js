const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/middlewares');
const userController = require('../Controllers/user.controllers');

// Para obtener el usuario de manera temporal
router.route('/').get(userController.getTempUser);

router.route('/updateSignUpUser').put(userController.updateSignUpUser);
router.route('/updateEditProfileUser').put(userController.updateEditProfileUser);

// Rutas protegidas por el middleware
router.use(middleware.check);

router.route('/getuser').get(userController.getUser);

module.exports = router;
