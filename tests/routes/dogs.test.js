require('../dataHelpers');
const app = require('../../lib/app');
const request = require('supertest');

describe('dogs routes', () => {
  it('creates a new dog when posted to', () => {
    return request(app)
      .post('/dogs')
      .send({ name: 'Taco', age: 3, weight: '50 lbs' })
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: 0,
          name: 'Taco',
          age: 3,
          weight: '50 lbs'
        });
      });
  });
});
