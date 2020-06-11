const connection = require("../database/connection.js");

module.exports = {
  async index(request, response) {
    const addresses = await connection('addresses').select('*');
    return response.json(addresses);
  },

  async create(request, response) {
    const { country, state, city, cep, number, user_id } = request.body;

    await connection('addresses').insert({
      country, state, city, cep, number, user_id
    });

    return response.status(200).send();
  },

  async show(request, response) {
    const { user_id } = request.body;
    const address = await connection('addresses').where('user_id', user_id).first();
    return response.json(address);
  },

  async delete(request, response) {
    const { id } = request.body;
    await connection('addresses').where('id', id).delete();
    return response.json({"status_code":204, "result":true});
  }
}
