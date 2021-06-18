const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const check = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (token) {
    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded.user;
      next();
    } catch (error) {
      console.log(error);
      res.status(403).json({ message: 'Forbidden', msg: 'Token Expired' });
    }
  } else {
    res.status(403).json({ message: 'Forbidden', msg: 'Token not exists' });
  }
};

module.exports = { check };
