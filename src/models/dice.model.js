const mongoose = require("mongoose");

const diceSchema = new mongoose.Schema(
  {
    sides: { type: Number, required: true },
  },
  { versionKey: false }
);

const Dice = mongoose.model("Dice", diceSchema);

module.exports = Dice;