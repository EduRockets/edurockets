const express = require('express');
const router = express.Router();

// Require Models
const schoolarShipModel = require('../models/scholarShip.js');

// Creating SchoolarShips
router.post("/", (req, res) => {
    const schoolarShip = req.body
    const newSchoolarShip = new schoolarShipModel(schoolarShip);
    try {
        newSchoolarShip.save();
        res.status(201).json(newSchoolarShip);
    }catch (err){
        res.status(409).json({ message: error.message}) 
    }
})

// Getting SchoolarShips

module.exports = router; 