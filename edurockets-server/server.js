require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

// Connecting to DB using Mongoose

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(PORT, () => console.log(`server running on Port:  ${PORT}`)))
  .catch((err) => console.error(err.message));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(cors());
app.use(cookieParser());

// Using Routes
app.use('/auth', require('./src/routes/auth.route.js'));
app.use('/user', require('./src/routes/user.route.js'));
app.use('/schoolarships', require('./src/routes/schoolarships.route.js'));
