require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');
const Dog = require('../lib/models/Dog');

const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData(5);
});

afterAll(() => {
  return mongoose.connection.close();
});

const getDog = () => {
  return Dog
    .findOne()
    .then(dog => {
      return JSON.parse(JSON.stringify(dog));
    });
};

module.exports = {
  getDog
};
