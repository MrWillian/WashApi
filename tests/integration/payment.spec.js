const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Payment', () => {
  beforeEach(async () => {
    return connection.migrate.rollback().then(function() {
      return connection.migrate.latest();
    }); 
  });

  afterAll(async () => { connection.destroy(); });

  it('should be able to show a Payment', async () => {
    await createUser();
    await createPayment();
    const response = await request(app).get('/payment').send({
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

  async function createPayment() {
    return await request(app).post('/payment').send({
      card_number: "8804 7894 5464 0000",
      card_name: "Teste",
      expire_date: "04/23",
      cvv: "778",
	    user_id: 1
    });
  }
});
