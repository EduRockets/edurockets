const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const { promisify } = require("util");

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
  return await bcrypt.hash(password, 12);
};

const sendJWTCookie = (user, req, res) => {
  const token = signJwt(user.id);
  const options = {
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
  });
};

exports.temp = (req, res) => {
  res.send("sssssupuiupppp");
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
    sendJWTCookie(currentUser, req, res);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const currentUser = await user.findOne({ email }).select("+password");
    const compare = await bcrypt.compare(password, currentUser.password);
    compare
      ? sendJWTCookie(currentUser, req, res)
      : res.status(400).json({ message: "something failed" });
  } catch (error) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

exports.logout = async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 10000),
    secure: env === "production" ? true : false,
    httpOnly: env === "production" ? true : false,
  };
  res.cookie("jwt", "expiredtoken", options);
  res.status(200).json({
    status: "success",
  });
};

// Some Middlewares
const decryptJWT = async (token) => {
  const jwtVerify = promisify(jwt.verify);
  return await jwtVerify(token, secret);
};

exports.secure = async (req, res, next) => {
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
};
