const baseRepository = require("./BaseRepository");

module.exports = {
  async index(request, response) {
    try {
      return response.json(await baseRepository.index('companies'));
    } catch(error) {
      return error;
    }
  },

  async create(request, response) {
    try {
      const { cnpj, user_id } = request.body;
      await baseRepository.create('companies', { cnpj, user_id });
      return response.json({ cnpj });
    } catch(error) {
      return error;
    }
  },

  async show(request, response) {
    try {
      const { user_id } = request.body;
      return response.json(await baseRepository.show('companies', user_id, 'user_id'));
    } catch(error) {
      return error;
    }
  }
}
