const connection = require("../database/connection.js");

module.exports = {
  async index(request, response) {
    const clients = await connection('clients').select('*');
    return response.json(clients);
  },

  async create(request, response) {
    const { cpf, user_id } = request.body;
    await connection('clients').insert({ cpf, user_id });
    return response.json({ cpf });
  },

  async show(request, response) {
    const { user_id } = request.body;
    const client = await connection('clients').where('user_id', user_id).first();
    return response.json(client);
  },
}
