const Mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const users = require('../models/user');

const secret = process.env.JWT_SECRET;

exports.updateSignUpUser = async (req, res) => {
  const { _id } = req.body.user;

  const {
    names,
    lastNames,
    country,
    state,
    birthday,
    highSchool,
    currentDegree,
    favoriteCountries,
    favoriteStudyAreas,
  } = req.body.profile;

  const idObject = Mongoose.Types.ObjectId(_id);

  try {
    users
      .updateOne(
        { _id: idObject, isActive: true },
        {
          $set: {
            names: names,
            lastNames: lastNames,
            country: country,
            state: state,
            birthday: birthday,
            highSchool: highSchool,
            currentDegree: currentDegree,
            favoriteCountries: favoriteCountries,
            favoriteStudyAreas: favoriteStudyAreas,
          },
        }
      )
      .then(() => {
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

exports.updateEditProfileUser = async (req, res) => {
  const { _id } = req.body.user;

  const { names, lastNames, country, state, birthday, phone } = req.body.profile;

  const idObject = Mongoose.Types.ObjectId(_id);
  console.log(idObject, names);
  try {
    users
      .findOneAndUpdate(
        { _id: idObject, isActive: true },
        {
          $set: {
            names: names,
            lastNames: lastNames,
            country: country,
            state: state,
            birthday: birthday,
            phone: phone,
          },
        },
        { new: true }
      )
      .select('+password')
      .then((user) => {
        user.password = undefined;
        res.status(200).json({ message: 'Success', user });
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  } catch (error) {
    res.status(400).json({ msg: err });
  }
};

exports.getUser = async (req, res) => {
  const token = req.header('x-auth-token');
  const decoded = jwt.verify(token, secret);
  try {
    users
      .findOne({ _id: decoded.id, isActive: true })
      .select('+password')
      .then((user) => {
        user.password = undefined;
        res.status(200).json({ message: 'Success', user });
      });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
};

// TEMPORAL ENDPOINT
exports.getTempUser = async (req, res) => {
  const uid = '60ca5b28dc62bb2e7cdde118';
  try {
    users
      .findOne({ _id: uid, isActive: true })
      .select('+password')
      .then((user) => {
        user.password = undefined;
        res.json({ user });
      });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
};
