const mongoose = require("mongoose");

const mobs = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gameID: {
    type: String,
    required: true,
  },
  aggressive: {
    type: Boolean,
    required: true,
  },
  hitpoints: {
    type: String,
    required: true,
  },
  drops: {
    type: [String],
    required: true,
  },
  exp: {
    type: String,
    required: true,
  },
});

const Mob = mongoose.model("Mob", mobs);

module.exports.Mobs = Mob;
