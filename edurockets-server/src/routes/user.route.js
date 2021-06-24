const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/middlewares');
const userController = require('../Controllers/user.controllers');

router.route('/updateStudentUser').put(userController.updateStudentUser);
router.route('/updateProfessionalUser').put(userController.updateProfessionalUser);
router.route('/updateUser').put(userController.updateUser);

// Rutas protegidas por el middleware
router.use(middleware.check);

router.route('/getUser').get(userController.getUser);

module.exports = router;
