const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userType: {
    type: String,
    default: '',
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
  profileId: {
    type: String,
    default: null,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
  },
});

module.exports = mongoose.model('users', userSchema);
