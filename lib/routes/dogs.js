const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { name, age, weight } = req.body;
    Dog
      .create({ name, age, weight })
      .then(dog => res.send(dog))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Dog
      .find()
      .lean()
      .then(dogs => res.send(dogs))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Dog
      .findById(id)
      .lean()
      .then(dog => res.send(dog))
      .catch(next);
  });
