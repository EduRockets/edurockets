const express = require('express');
const router = express.Router();

const userController = require('../Controllers/user.controllers');

router.route('/updateuser').put(userController.updateUser);

module.exports = router;
