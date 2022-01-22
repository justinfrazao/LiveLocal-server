const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('My app', () => {

  it('returns successful request', async () => {
    const resp = await request.get('/');
    expect(resp.statusCode).toBe(200);
  });

  it('responds hello world', async () => {
    const resp = await request.get('/');
    expect(resp.body.message).toBe('Hello World!');
  });
});