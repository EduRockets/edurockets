const express = require('express');
const file = require('../models/file');

exports.uploadFiles = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const newFile = {
        name: element.originalname,
        path: element.path,
        type: element.mimetype,
        size: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(newFile);
    });

    const newFiles = new file({
      title: req.body.title,
      files: filesArray,
    });

    await newFiles.save();
    res.status(200).send('I got the image');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) return '0 Bytes';
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
};
