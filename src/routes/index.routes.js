const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.index);

router.get('/add-pokemon', controller.addPokemonView);

router.post('/add-pokemon', controller.addPokemon);

router.delete('/delete-pokemon/:id', controller.deletePokemon);

module.exports = router;
