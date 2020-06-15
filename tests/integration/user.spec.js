const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('User', () => {
  beforeEach(async () => { 
    return connection.migrate.rollback().then(function() {
      return connection.migrate.latest();
    });
  });

  afterAll(async () => {  connection.destroy(); });

  it('should be able to create a new User', async () => {
    const response = await createUser();
    expect(response.body).toHaveProperty('name');
  });

  it('should be able to delete a User', async () => {
    await createUser();
    const response = await request(app).delete('/user').send({ id: 1 });
    expect(response.body).toHaveProperty('result', true);
  });

  async function createUser() {
    return await request(app).post('/user').send({
      id: 1,
      name: "teste1",
      email: "teste1@gmail",
      password: "123456",
      cellphone: "77999999999"
    });
  }
});
