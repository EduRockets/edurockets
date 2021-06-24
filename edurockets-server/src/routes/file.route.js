const express = require('express');
const router = express.Router();

const file = require('../models/file');
const upload = require('../Tools/Storage');

router.post('Public/Images', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('sadsadasdasd');
});

module.exports = router;
