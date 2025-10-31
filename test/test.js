import { should } from 'chai';
import request from 'supertest';
import app from '../app.js';

should();

describe('GET /', () => {
  it('should return "Hello, GitHub Actions!"', async () => {
    const res = await request(app).get('/');
    res.status.should.equal(200);
    res.text.should.equal('Hello, GitHub Actions!');
  });
});