const express = require("express");
const router = express.Router();
const { Enchantments } = require("../models/enchantments");

router.get("/all", async (req, res) => {
  const enchants = await Enchantments.find().select("-_id").sort("name");
  res.send(enchants);
});

router.get("/treasure", async (req, res) => {
  const enchants = await Enchantments.find({ isTreasure: true }).select("-_id").sort("name");
  res.send(enchants);
});

router.get("/:name", async (req, res) => {
  const enchantName = req.params.name;
  const enchants = await Enchantments.findOne({ name: enchantName }).select("-_id");
  if (!enchants) res.status(404).render("404");
  else res.send(enchants);
});

module.exports = router;
