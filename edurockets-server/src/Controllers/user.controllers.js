const users = require('../models/user');
const Mongoose = require('mongoose');

exports.updateUser = async (req, res) => {
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
