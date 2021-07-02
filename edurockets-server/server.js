require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

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

// Using Routes
app.use('/auth', require('./src/routes/auth.route.js'));
app.use('/user', require('./src/routes/user.route.js'));
app.use('/profile', require('./src/routes/profile.route.js'));
app.use('/schoolarship', require('./src/routes/schoolarship.route.js'));

// For Images and other files
app.use('/image', require('./src/routes/image.route.js'));
app.use('/file', require('./src/routes/file.route.js'));

app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));
