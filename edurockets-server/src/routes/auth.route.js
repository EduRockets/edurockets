require("dotenv/config");
const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");

const { check, validationResult } = require("express-validator");

// Importing models
const user = require("../models/user");

router.post(
  "/signup",
  [
    check("name", "Name is empty").not().isEmpty(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password has to be 6 or more characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // Validating some fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Getting atributes from request body
    const {
 name, email, password, birthday, country, city 
} = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const encryptingPass = await bcrypt.hash(password, salt);
      // Creating new user with the model
      user
        .create({
          name,
          email,
          password: encryptingPass,
          birthday,
          country,
          city,
        })
        .then((doc) => {
          res.json({ success: true, user: doc.toJSON() });
        })
        .catch((err) => {
          res.json({
            errors: [{ msg: "Cannot register right now for some reason" }],
          });
        });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error posting user");
    }
  }
);

module.exports = router;
