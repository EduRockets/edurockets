const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
  names: {
    type: String,
    default: '',
  },
  lastNames: {
    type: String,
    default: '',
  },
  birthday: {
    type: Date,
    default: null,
  },
  country: {
    type: String,
    default: '',
  },
  state: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  photo: {
    type: String,
    default: '',
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
  schoolarships: {
    type: [{}],
    default: [],
  },
  isActive: { type: Boolean, required: false, default: true },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model('users', userSchema);
