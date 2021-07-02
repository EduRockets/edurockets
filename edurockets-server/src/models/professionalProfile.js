const mongoose = require('mongoose');

const professionalProfileSchema = mongoose.Schema({
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
  collegeDegree: {
    type: String,
    default: '',
  },
  degree: {
    type: String,
    default: '',
  },
  modality: {
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

module.exports = mongoose.model('professionalProfile', professionalProfileSchema);
