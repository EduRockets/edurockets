const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  lastNames: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
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
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model('users', userSchema);
