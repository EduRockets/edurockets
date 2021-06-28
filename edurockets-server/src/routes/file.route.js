const express = require('express');
const router = express.Router();

const { uploadFile } = require('../Tools/FileHelper');

const fileController = require('../Controllers/file.controllers');

router.post('/uploadFiles', uploadFile.single('files'), fileController.uploadFiles);

module.exports = router;
