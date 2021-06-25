const express = require('express');
const router = express.Router();

const { uploadImage } = require('../Tools/FileHelper');

const imageController = require('../Controllers/image.controllers');

router.post('/uploadImage', uploadImage.single('file'), imageController.uploadImage);

module.exports = router;
