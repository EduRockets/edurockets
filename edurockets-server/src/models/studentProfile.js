const mongoose = require('mongoose');

const studentProfileSchema = mongoose.Schema({
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
    type: {},
    default: {
      id: '',
      src: '',
    },
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
});

module.exports = mongoose.model('studentProfile', studentProfileSchema);
