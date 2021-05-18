const express = require("express");
const router = express.Router();

const auth = require("../middlewares/checkauth.middleware.js");

router.get("/", auth, (req, res) => res.send("holowo"));

module.exports = router;
