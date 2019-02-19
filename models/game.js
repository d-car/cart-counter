const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: { type: String, required: false },
  cover: { type: String, required: false },
  company: { type: String, required: false },
  platforms: { type: String, required: false },
  release: { type: String, required: false },
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;