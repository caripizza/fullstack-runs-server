const { getDog } = require('../dataHelpers');
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

  it('can get a list of dogs', () => {
    return request(app)
      .get('/dogs')
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toHaveLength(5);
      });
  });

  it('can get a dog by id', async() => {
    const { _id } = await getDog();

    return request(app)
      .get(`/dogs/${_id}`)
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toEqual({
          _id,
          name: 'Dog #0',
          age: 12,
          weight: '43 lbs',
          __v: 0
        });
      });
  });
});
