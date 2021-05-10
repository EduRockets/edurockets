const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        require: true
    },
    country: String,
    city: String,
    archives : [{
        type: String
    }],
    schoolarships:[{
        uid: String,
        state: String
    }]
});

exports.model = mongoose.model('users', userSchema);