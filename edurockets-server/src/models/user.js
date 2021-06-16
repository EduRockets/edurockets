const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  names: {
    type: String,
    default: '',
  },
  lastNames: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  state: {
    type: String,
    default: '',
  },
  birthday: {
    type: Date,
    default: null,
  },
  highSchool: {
    type: String,
    default: '',
  },
  currentDegree: {
    type: String,
    default: '',
  },
  favoriteCountries: {
    type: [String],
    default: [],
  },
  favoriteStudyAreas: {
    type: [String],
    default: [],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, required: false, default: true },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model('users', userSchema);
