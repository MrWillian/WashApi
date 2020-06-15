const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Company', () => {
  beforeEach(async () => { 
    return connection.migrate.latest();
  });

  afterAll(async () => { connection.destroy(); });

  it('should be able to create a new Company', async () => {
    await createUser();
    const response = await createCompany();
    expect(response.body).toHaveProperty('cnpj');
  });

  it('should be able to show a Company', async () => {
    await createUser();
    await createCompany();
    const response = await request(app).get('/company').send({ user_id: 1 });
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

  async function createCompany() {
    return await request(app).post('/company').send({
      cnpj: "42.621.645/0001-91",
	    user_id: 1
    });
  }
});
