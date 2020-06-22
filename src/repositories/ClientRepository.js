const baseRepository = require("./BaseRepository");

module.exports = {
  async index(request, response) {
    try {
      const columns = [
        'clients.cpf', 'users.name', 'users.email',
      ];

      return response.json(
        await baseRepository.index('clients', columns, 'users', 'user_id')
      );
    } catch(error) {
      return error;
    }
  },

  async create(request, response) {
    try {
      const { cpf, user_id } = request.body;
      await baseRepository.create('clients', { cpf, user_id });
      return response.json({ cpf });
    } catch(error) {
      return error;
    }
  },

  async show(request, response) {
    try {
      const { user_id } = request.body;
      return response.json(await baseRepository.show('clients', user_id, 'user_id'));
    } catch(error) {
      return error;
    }
  }
}
