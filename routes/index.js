const express = require("express");
const router = express.Router();
const { Mobs } = require("../models/mobs");
const { Enchantments } = require("../models/enchantments");

router.get("/", async (req, res) => {
  const mobs = await Mobs.find().select("-_id name").sort("name");
  const enchants = await Enchantments.find().select("-_id name").sort("name");
  res.render("index", { mobs, enchants });
});

module.exports = router;
