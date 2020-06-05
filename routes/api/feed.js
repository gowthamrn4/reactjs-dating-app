const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.get("/feed", (req, res) => {
  User.find({}, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;
