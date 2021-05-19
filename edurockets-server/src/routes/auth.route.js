require("dotenv/config");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
// Importing models
const user = require("../models/user");
const secret = process.env.JWT_SECRET_TOKEN || "secreto";

router.post(
  "/signup",
  [
    check("name", "Name is empty").not().isEmpty(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password has to be 6 or more characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const encryptingPass = await bcrypt.hash(password, salt);
      user
        .create({
          name,
          email,
          password: encryptingPass,
        })
        .then((doc) => {
          const payload = {
            user: {
              id: doc.id,
            },
          };
          jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
            if (err) {
              res.status(500).json({
                success: false,
                msg: err.message,
                stack: err.stack,
              });
            }
            res.json({ token });
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            msg: err.message,
            stack: err.stack,
          });
        });
    } catch (err) {
      res.status(500).json({
        success: false,
        msg: err.message,
        stack: err.stack,
      });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").exists(),
  ],
  (req, res) => {
    const { email, password } = req.body;
    try {
      user
        .findOne({ email })
        .then((doc) => {
          if (bcrypt.compareSync(password, doc.password)) {
            const payload = {
              user: {
                id: doc.id,
              },
            };
            jwt.sign(payload, secret, { expiresIn: 300 }, (err, token) => {
              if (err) {
                res.status(500).json({
                  success: false,
                  msg: err.message,
                  stack: err.stack,
                });
              }
              res.json({ token });
            });
          } else {
            res.status(500).json({
              success: false,
              msg: "Invalid password",
            });
          }
        })
        .catch((err) => {
          res.status(400).json({
            success: false,
            msg: "Invalid email",
            stack: err.stack,
          });
        });
    } catch (error) {}
  }
);

module.exports = router;
