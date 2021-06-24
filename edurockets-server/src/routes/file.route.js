const express = require('express');
const fs = require('fs');
const router = express.Router();

const file = require('../models/file');
const upload = require('../Tools/Storage');

router.post('/uploadImage', upload.single('image'), (req, res) => {
  const { _id } = req.body;
  const img = fs.readFileSync(req.file.path);
  const encodedImage = img.toString('base64');
});

module.exports = router;
