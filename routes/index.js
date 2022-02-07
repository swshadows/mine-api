const express = require("express");
const router = express.Router();
const { Mobs } = require("../models/mobs");

router.get("/", async (req, res) => {
  const mobs = await Mobs.find().select("-_id name").sort("name");
  res.render("index", { mobs });
});

module.exports = router;
