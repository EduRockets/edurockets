const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('files', fileSchema);
