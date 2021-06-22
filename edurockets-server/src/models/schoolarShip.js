const mongoose = require('mongoose');

const schoolarShipSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  studyArea: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  modality: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  duration: {
    type: Number,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hedge: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('schoolarships', schoolarShipSchema);
