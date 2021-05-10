const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');

const { check, validationResult } = require('express-validator');

// Importing models
const User = require('../models/user');

router.post('/', [ check('name', 'Name is empty').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password has to be 6 or more characters'
    ).isLength({min: 6}) ], 
    (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        }
        res.send('awa')
    }
);


module.exports = router;