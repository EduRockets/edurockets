const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/middlewares');
const schoolarshipController = require('../Controllers/schoolarship.controllers');

// Para obtener el usuario de manera temporal
router.route('/createSchoolarship').post(schoolarshipController.createSchoolarship);
router.route('/getSchoolarship/:id').get(schoolarshipController.getSchoolarship);

// Rutas protegidas por el middleware
router.use(middleware.check);

module.exports = router;
