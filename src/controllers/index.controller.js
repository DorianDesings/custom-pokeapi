const controller = {};
const connection = require('../dbConnection/connection');
const PokeModel = require('../models/pokemon.model');

controller.index = async (req, res) => {
  try {
    await connection();
    const allPokemons = await PokeModel.find();
    console.log(allPokemons);
    res.render('index', { allPokemons });
  } catch (err) {
    console.error(err);
  }
};

controller.addPokemonView = (req, res) => {
  res.render('addPokemon');
};

controller.addPokemon = async (req, res) => {
  try {
    const { name } = req.body;
    // const name = req.body.name;
    const body = {
      name: name.toLowerCase().trim()
    };
    await connection();
    await PokeModel.create(body);
    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
};

controller.deletePokemon = async (req, res) => {
  try {
    await connection();
    const id = req.params.id;
    await PokeModel.findByIdAndDelete(id, err => {
      if (err) {
        res.json({ error: true });
      } else {
        res.json({ error: false });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: true });
  }
};

module.exports = controller;

// XMLHttpRequest -> promises ->fetch then()-> async/await
