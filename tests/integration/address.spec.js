const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Address', () => {
  beforeEach(async () => {
    return connection.migrate.rollback().then(function() {
      return connection.migrate.latest();
    }); 
  });

  afterAll(async () => { connection.destroy(); });

  // it('should be able to create a new Address', async () => {
  //   await createUser();
  //   const response = await createAddress();
  //   expect(200);
  // });

  it('should be able to show a Address', async () => {
    await createUser();
    await createAddress();
    const response = await request(app).get('/address').send({
      user_id: 1
    });

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

  async function createAddress() {
    return await request(app).post('/address').send({
      country: "Brasil",
      state: "Bahia",
      city: "Boquira",
      cep: "46530-000",
      number: "s/n",
	    user_id: 1
    });
  }
});
