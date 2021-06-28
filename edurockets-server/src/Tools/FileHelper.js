const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '-' + fileName);
  },
});

var uploadImage = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Solamente formatos .png, .jpg and .jpeg'));
    }
  },
});

var uploadFile = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'file/pdf' ||
      file.mimetype == 'file/jpg' ||
      file.mimetype == 'file/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Solamente formatos .pdf, .jpg and .jpeg'));
    }
  },
});

module.exports = { uploadImage, uploadFile };
