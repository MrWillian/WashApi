const connection = require("../database/connection.js");

module.exports = {
  async index(request, response) {
    const companies = await connection('companies').select('*');
    return response.json(companies);
  },

  async create(request, response) {
    const { cnpj, user_id } = request.body;
    await connection('companies').insert({ cnpj, user_id });
    return response.json({ cnpj });
  },

  async show(request, response) {
    const { user_id } = request.body;
    const company = await connection('companies').where('user_id', user_id).first();
    return response.json(company);
  },
}
