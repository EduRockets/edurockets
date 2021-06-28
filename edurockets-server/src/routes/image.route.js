const express = require('express');
const router = express.Router();

const { uploadImage } = require('../Tools/FileHelper');

const imageController = require('../Controllers/image.controllers');

router.post('/uploadImage', uploadImage.single('file'), imageController.uploadImage);
router.put('/updateImage', uploadImage.single('file'), imageController.updateImage);

module.exports = router;
