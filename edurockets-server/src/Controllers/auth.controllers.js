const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');

const secret = process.env.JWT_SECRET;

const env = process.env.NODE_ENV;

// Some helpers
const signJwt = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_ACCESS_TIME,
  });
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const sendJWT = (user, req, res) => {
  const token = signJwt(user.id);
  user.password = undefined;
  res.status(200).send({ token, user });
};

// API Functions
exports.signUp = async (req, res) => {
  const { email, password, userType } = req.body;
  const encryptPw = await encryptPassword(password);
  try {
    const currentUser = await user.create({
      email,
      password: encryptPw,
      userType,
    });
    sendJWT(currentUser, req, res);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const currentUser = await user.findOne({ email }).select('+password');
    if (currentUser) {
      const compare = await bcrypt.compare(password, currentUser.password);
      compare ? sendJWT(currentUser, req, res) : res.status(400).json({ message: 'Bad Request' });
    } else {
      res.status(400).json({ message: 'Bad Request' });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Bad Request', error: err });
  }
};

exports.logout = async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 10000),
    secure: env === 'production' ? true : false,
    httpOnly: env === 'production' ? true : false,
  };
  res.cookie('jwt', 'expiredtoken', options);
  res.status(200).json({
    status: 'success',
  });
};
