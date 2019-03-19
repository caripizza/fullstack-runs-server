const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { name, age, weight } = req.body;
    Dog
      .create({ name, age, weight })
      .then(dog => res.send(dog))
      .catch(next);
  });
