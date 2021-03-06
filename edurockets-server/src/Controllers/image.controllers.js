const image = require('../models/image');

exports.uploadImage = async (req, res, next) => {
  try {
    image
      .create({
        name: req.file.originalname,
        path: req.file.path,
        type: req.file.mimetype,
        size: fileSizeFormatter(req.file.size, 2),
      })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).json({ message: 'Bad Request', error: err });
      });
  } catch (err) {
    res.status(400).json({ message: 'Bad Request', error: err });
  }
};

exports.updateImage = async (req, res, next) => {
  try {
    const { _id } = req.body;
    image
      .findOneAndUpdate(
        { _id, isActive: true },
        {
          $set: {
            name: req.file.originalname,
            path: req.file.path,
            type: req.file.mimetype,
            size: fileSizeFormatter(req.file.size, 2),
          },
        },
        { new: true }
      )
      .then((image) => {
        res.status(200).json({ message: 'Success', image });
      })
      .catch((err) => {
        res.status(400).json({ message: 'Bad Request', error: err });
      });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error: err });
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) return '0 Bytes';
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
};
