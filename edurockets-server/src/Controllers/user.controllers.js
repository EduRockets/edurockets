const Mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const users = require('../models/user');

exports.getUser = async (req, res) => {
  const token = req.header('x-auth-token');
  const decoded = jwt.verify(token, secret);
  try {
    users
      .findOne({ _id: decoded.id, isActive: true })
      .select('+password')
      .then((user) => {
        user.password = undefined;
        res.status(200).send(user);
      })
      .catch((error) => {
        res.status(400).json({ message: 'Bad Request', error });
      });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};

exports.updateUser = async (req, res) => {
  const { _id } = req.body.user;
  const idObject = Mongoose.Types.ObjectId(_id);
  try {
    const newUser = await users
      .findOneAndUpdate(
        { _id: idObject, isActive: true },
        {
          $set: {
            ...req.body.data,
          },
        },
        { new: true }
      )
      .select('+password');
    if (newUser) {
      newUser.password = undefined;
      res.status(200).send(newUser);
    }
    res.status(400).json({ message: 'Bad Request' });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};
