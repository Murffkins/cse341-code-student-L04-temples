const routes = require('express').Router();
const temples = require('../controllers/temple.js');

// Retrieve all published Temples
routes.get('/', temples.findAll);

// Retrieve a single Temple with id
routes.get('/:temple_id', temples.findOne);

// Create a new Temple
routes.post('/', temples.create);

// Update a Temple with id
// routes.put('/:id', temples.update);

// Delete a Temple with id
// routes.delete('/:id', temples.delete);

// Create a new Temple
// routes.delete('/', temples.deleteAll);

module.exports = routes;
