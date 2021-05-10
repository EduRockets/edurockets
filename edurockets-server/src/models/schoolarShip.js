const mongoose = require('mongoose');

const schoolarShipSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    Price: Number,
    career: String,
    educationDegree: String,
    uidInstitute: String,
});

exports.model = mongoose.model('ScholarShips', schoolarShipSchema);;