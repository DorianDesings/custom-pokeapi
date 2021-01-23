const { Schema, model } = require('mongoose');

const PokeSchema = new Schema({
  name: String,
  number: Number,
  types: [String],
  color: String,
  pngImage: String,
  gifImage: String,
  weight: Number,
  height: Number,
  catched: Boolean
});
// stats: {
//   hp: Number,
//   attack: Number,
//   defense: Number,
//   attackX: Number,
//   defenseX: Number,
//   speed: Number
// }

const PokeModel = model('pokemons', PokeSchema);

module.exports = PokeModel;
