const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/middlewares');
const profileControllers = require('../Controllers/profile.controllers');

router.route('/createProfile').post(profileControllers.createProfile);
router.route('/getProfile/:userType/:id').get(profileControllers.getProfile);
router.route('/updateProfile').put(profileControllers.updateProfile);
/**router.use(middleware.check);
 */
module.exports = router;
