const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cart-counter"
);

const gameSeed = [
  {
    title: "Donkey Kong Country",
    cover: "https://www.mobygames.com/images/covers/l/25304-donkey-kong-country-snes-front-cover.jpg",
    company: "Rare",
    platforms: "SNES",
    release: "1994"
  },
  {
    title: "Donkey Kong Country 2",
    cover: "https://upload.wikimedia.org/wikipedia/en/c/c3/DK_Country_2.jpg",
    company: "Rare",
    platforms: "SNES",
    release: "1995"
  },
  {
    title: "Secret of Mana",
    cover: "https://www.mobygames.com/images/covers/l/30332-secret-of-mana-snes-front-cover.jpg",
    company: "Squaresoft",
    platforms: "SNES",
    release: "1993"
  },
  {
    title: "Super Mario RPG",
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/SuperMarioRPGSNESCoverArtUS.jpg/220px-SuperMarioRPGSNESCoverArtUS.jpg",
    company: "SquareSoft",
    platforms: "SNES",
    release: "1996"
  },
  {
    title: "Earthbound",
    cover: "https://cdn.shopify.com/s/files/1/0942/1228/products/swhmTXb.jpeg?v=1438905278",
    company: "HAL",
    platforms: "SNES",
    release: "1994"
  },
  {
    title: "The Legend of Zelda: Link's Awakening DX",
    cover: "https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/9/9a/LADX_NA_Box_Art.png/250px-LADX_NA_Box_Art.png?version=90be179faca693e0b52153a38c38aa7e",
    company: "Nintendo",
    platforms: "Gameboy",
    release: "1990"
  },
  {
    title: "Chrono Trigger",
    cover: "https://i.redd.it/abxb2dw3xfqz.png",
    company: "SquareSoft",
    platforms: "SNES",
    release: "1995"
  },
  {
    title: "Golden Sun",
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Gsbox.jpg/220px-Gsbox.jpg",
    company: "Camelot",
    platforms: "Gameboy Advance",
    release: "2001"
  },
];

db.Game
  .remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
