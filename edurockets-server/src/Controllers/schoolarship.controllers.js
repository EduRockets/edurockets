const Mongoose = require('mongoose');
const schoolarship = require('../models/schoolarShip');

exports.createSchoolarship = async (req, res) => {
  try {
    const foundedSchoolarship = await schoolarship.findOne({ ...req.body });
    foundedSchoolarship
      ? res.status(400).json({ message: 'Ya existe ' })
      : schoolarship
          .create({
            ...req.body,
          })
          .then((createdSchoolarship) => {
            res.status(200).json({ message: 'Success', data: createdSchoolarship });
          })
          .catch((error) => {
            res.status(400).json({ message: 'Bad Request', error });
          });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Bad Request', error });
  }
};

exports.getSchoolarship = async (req, res) => {
  try {
    const { id } = req.params;
    const idObject = Mongoose.Types.ObjectId(id);
    schoolarship
      .findOne({ _id: idObject, isActive: true })
      .then((result) => {
        res.status(200).json({ schoolarship: result });
      })
      .catch((error) => {
        res.status(400).json({ message: 'Bad Request', error });
      });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
};
