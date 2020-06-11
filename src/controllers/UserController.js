const connection = require("../database/connection.js");

module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*');
    return response.json(users);
  },

  async create(request, response) {
    const { name, email, password, cellphone } = request.body;

    await connection('users').insert({
      name, email, password, cellphone
    });

    return response.json({ name });
  },

  async show(request, response) {
    const { id } = request.body;
    const user = await connection('users').where('id', id).first();
    return response.json(user);
  },
}
