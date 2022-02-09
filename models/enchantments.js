const mongoose = require("mongoose");

const enchantments = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isTreasure: {
    type: Boolean,
    required: true,
  },
  incompatible: {
    type: [String],
    required: true,
  },
  levels: {
    type: [String],
    required: true,
  },
  validItems: {
    type: [String],
    required: true,
  },
});

const Enchantment = mongoose.model("Enchantment", enchantments);

module.exports.Enchantments = Enchantment;
