const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/middlewares');
const userController = require('../Controllers/user.controllers');

// Rutas protegidas por el middleware
router.route('/updateUser').put(userController.updateUser);

router.use(middleware.check);

router.route('/getUser').get(userController.getUser);

module.exports = router;
