const express = require("express");
const router = express.Router();
const { Mobs } = require("../models/mobs");

router.get("/all", async (req, res) => {
  const mobs = await Mobs.find().select("-_id").sort("name");
  res.send(mobs);
});

router.get("/passive", async (req, res) => {
  const mobs = await Mobs.find({ aggressive: false }).select("-_id").sort("name");
  res.send(mobs);
});

router.get("/aggressive", async (req, res) => {
  const mobs = await Mobs.find({ aggressive: true }).select("-_id").sort("name");
  res.send(mobs);
});

router.get("/:name", async (req, res) => {
  const mobName = req.params.name;
  const mobs = await Mobs.findOne({ name: mobName }).select("-_id");
  if (!mobs) res.status(404).render("404");
  else res.send(mobs);
});

module.exports = router;
