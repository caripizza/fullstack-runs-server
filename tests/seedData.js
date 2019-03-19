const Dog = require('../lib/models/Dog');

module.exports = function(count = 5) {
  const dogs = [...Array(count)].map((_, idx) => ({
    name: `Dog #${idx}`,
    age: 12,
    weight: '43 lbs'
  }));

  return Dog.create(dogs);
};
