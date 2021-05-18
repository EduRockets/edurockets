require("dotenv/config");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET_TOKEN || "secreto";

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (token) {
    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded.user;
      next();
    } catch (err) {
      res
        .status(401)
        .json({ success: false, msg: "Token is not valid", stack: err.stack });
    }
  } else {
    res.status(401).json({
      success: false,
      msg: "No token, access denied",
    });
  }
};
