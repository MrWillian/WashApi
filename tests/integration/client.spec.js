const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Client', () => {
  beforeEach(async () => { 
    // return connection.migrate.rollback().then(function() {
      return connection.migrate.latest();
    // });
  });

  afterAll(async () => { connection.destroy(); });

  it('should be able to create a new Client', async () => {
    await createUser();
    const response = await createClient();
    expect(response.body).toHaveProperty('cpf');
  });

  it('should be able to show a Client', async () => {
    await createUser();
    await createClient();
    const response = await request(app).get('/client').send({ user_id: 1 });
    expect(response.body).toHaveProperty('id');
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

  async function createClient() {
    return await request(app).post('/client').send({
      cpf: "165.125.145-88",
	    user_id: 1
    });
  }
});
