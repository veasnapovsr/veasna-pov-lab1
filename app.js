// Example: test/test.js
it('should return "Hello, CI/CD!"', async () => {
  const res = await request(app).get('/');
  expect(res.text).to.equal('Hello, CI/CD!');
});
