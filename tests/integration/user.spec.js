const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('User', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(() => {
    connection.destroy();
  });

  it('should be able to create a new User', async () => {
    const response = await request(app).post('/user').send({
      name: "teste1",
      email: "teste1@gmail",
      password: "123456",
      cellphone: "77999999999"
    });

    expect(response.body).toHaveProperty('name');
  });
});
