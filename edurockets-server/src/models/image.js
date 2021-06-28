const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  path: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('images', imageSchema);
