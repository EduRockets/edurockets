const secret = process.env.SECRET;

const check = (req, res, next) => {
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

module.exports = { check };
