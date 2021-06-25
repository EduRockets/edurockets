const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  type: {
    type: [Object],
  },
});

module.exports = mongoose.model('files', fileSchema);
