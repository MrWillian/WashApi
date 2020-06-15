const connection = require("../database/connection.js");

module.exports = {
  async index(request, response) {
    try {
      return response.json(await connection('users').select('*'));
    } catch(error) {
      return error;
    }
  },

  async create(request, response) {
    try {
      const { name, email, password, cellphone } = request.body;
      await connection('users').insert({ name, email, password, cellphone });
      return response.json({ name });
    } catch(error) {
      return error;
    }
  },

  async show(request, response) {
    try {
      const { id } = request.body;
      const user = await connection('users').where('id', id).first();
      return response.json(user);
    } catch(error) {
      return error;
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.body;
      const result = await connection('users').where('id', id).delete();
      return response.json({ "result": result == 1 ? true : false });
    } catch(error) {
      return error;
    }
  }
}