const connection = require("../database/connection.js");

module.exports = {
  async index(request, response) {
    const payments = await connection('payments').select('*');
    return response.json(payments);
  },

  async create(request, response) {
    const { card_number, card_name, expire_date, cvv, user_id } = request.body;
    await connection('payments').insert({ card_number, card_name, expire_date, cvv, user_id });
    return response.json({"status_code": 204, "result": true});
  },

  async show(request, response) {
    const { user_id } = request.body;
    const payment = await connection('payments').where('user_id', user_id).first();
    return response.json(payment);
  },

  async delete(request, response) {
    const { id } = request.body;
    await connection('payments').where('id', id).delete();
    return response.json({"status_code":204, "result":true});
  }
}
