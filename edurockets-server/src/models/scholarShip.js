var mongoose = require('mongoose');

const schoolarShipSchema = mongoose.Schema({
    name: String,
    description: String,
    Price: Number,
    career: String,
    educationDegree: String,
    uidInstitute: String,
});

exports.model = mongoose.model('ScholarShips', schoolarShipSchema);;