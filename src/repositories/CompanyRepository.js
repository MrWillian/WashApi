const baseRepository = require("./BaseRepository");

module.exports = {
  async index(request, response) {
    try {
      const columns = [
        'companies.id', 'companies.cnpj', 'companies.tellphone', 
        'users.name', 'users.email',
      ];
      return response.json(
        await baseRepository.index('companies', columns, 'users', 'user_id')
      );

    } catch(error) {
      return error;
    }
  },

  async create(request, response) {
    try {
      const { cnpj, tellphone, user_id } = request.body;
      await baseRepository.create('companies', { cnpj, tellphone, user_id });
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
