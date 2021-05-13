const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middlewares.js");

router.get("/", auth, (req, res) => res.send("holowo"));

module.exports = router;
