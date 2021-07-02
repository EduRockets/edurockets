const Mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const studentProfile = require('../models/studentProfile');
const professionalProfile = require('../models/professionalProfile');

exports.createProfile = async (req, res) => {
  try {
    const createdProfile =
      req.body.userType === 'student'
        ? await studentProfile.create({ ...req.body.profile })
        : await professionalProfile.create({ ...req.body.profile });
    createdProfile
      ? res.status(200).send(createdProfile)
      : res.status(400).json({ message: 'Bad Request' });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};

// Get profile
exports.getProfile = async (req, res) => {
  try {
    const { userType, id } = req.params;
    const idObject = Mongoose.Types.ObjectId(id);
    const profile =
      userType === 'student'
        ? await studentProfile.findById({ _id: idObject })
        : await professionalProfile.find({ _id: idObject });
    profile ? res.status(200).send(profile) : res.status(400).json({ message: 'Bad Request' });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { userType, id, data } = req.body;
    const idObject = Mongoose.Types.ObjectId(id);
    const newProfile =
      userType === 'student'
        ? await studentProfile.findOneAndUpdate(
            { _id: idObject },
            {
              $set: {
                ...data,
              },
            },
            { new: true }
          )
        : await professionalProfile.findOneAndUpdate(
            { _id: idObject },
            {
              $set: {
                ...data,
              },
            },
            { new: true }
          );
    if (newProfile) {
      res.status(200).send(newProfile);
    }
    res.status(400).json({ message: 'Bad Request' });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};
