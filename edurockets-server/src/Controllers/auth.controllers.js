const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');

const secret = process.env.JWT_SECRET;
const expires = process.env.JWT_EXPIRES;
const expiresNum = process.env.JWT_EXPIRATION_NUM;
const env = process.env.NODE_ENV;

// Some helpers
const signJwt = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: 3600,
  });
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const sendJWT = (user, req, res) => {
  const token = signJwt(user.id);
  user.password = undefined;
  res.json({ token, user });
  {
    /* const options = {
    expires: new Date(Date.now() + expiresNum),
    secure: env === "production" ? true : false,
    httpOnly: env === "production" ? true : false,
  };
  res.cookie("jwt", token, options);
  user.password = undefined;
  res.status(200).json({
    status: "success",
    token,
    user,
  }); */
  }
};

// API Functions
exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  const encryptPw = await encryptPassword(password);
  try {
    const currentUser = await user.create({
      email,
      password: encryptPw,
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
      compare
        ? sendJWT(currentUser, req, res)
        : res.status(400).json({ message: 'something failed' });
    } else {
      res.status(400).json({ message: 'something failed' });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
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

exports.check = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (token) {
    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(403).json({ message: 'Forbidden', msg: { error } });
    }
  } else {
    res.status(403).json({ message: 'Forbidden', msg: 'Token not exists' });
  }
};

/* exports.secure = async (req, res, next) => {
  let token;
  if (req.cookies) token = req.cookies.jwt;

  if (!token || token === "expiredtoken") {
    return res.status(401).json({
      message: "You are not Authorize",
    });
  }

  const jwtInfo = await decryptJWT(token);
  const currentUser = await user.findById(jwtInfo.id);
  if (!currentUser) {
    return res.status(401).json({
      message: "You are not Authorize",
    });
  }

  req.user = currentUser;
  next();
}; */

exports.temp = (req, res) => {
  res.send('sssssupuiupppp');
};
