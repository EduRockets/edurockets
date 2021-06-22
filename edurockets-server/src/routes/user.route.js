const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/middlewares');
const userController = require('../Controllers/user.controllers');

router.route('/updateSignUpUser').put(userController.updateSignUpUser);
router.route('/updateEditProfileUser').put(userController.updateEditProfileUser);

// Rutas protegidas por el middleware
router.use(middleware.check);

router.route('/getUser').get(userController.getUser);

module.exports = router;
