require('dotenv/config');

const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json({ extended: false }));

// Using Routes
app.use('/users', require('./src/routes/users.route.js'));
// app.use('/auth', require('./src/routes/auth.route.js'));


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Connecting to DB using Mongoose
mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }  )
.then(()=> app.listen(PORT, ()=> console.log(`server running on Port:  ${PORT}`) ))
.catch((err) => console.log(err.message))
