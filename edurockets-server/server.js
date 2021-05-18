require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../edurockets-client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(_dirname, "edurockets-server", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 5000;

// Connecting to DB using Mongoose

mongoose
  .connect(process.env.DB_URI || 'mongodb+srv://varela:2408@cluster0.ne0yk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on Port:  ${PORT}`))
  )
  .catch((err) => console.error(err.message));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(cors());

// Using Routes
app.use("/auth", require("./src/routes/auth.route.js"));
app.use("/schoolarships", require("./src/routes/schoolarships.route.js"));
