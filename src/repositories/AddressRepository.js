const baseRepository = require("./BaseRepository");

module.exports = {
  async index(request, response) {
    try {
      return response.json(await baseRepository.index('addresses'));
    } catch(error) {
      return error;
    }
  },

  async create(request, response) {
    try {
      const { country, state, city, cep, number, user_id } = request.body;
      await baseRepository.create('addresses', { 
        country, state, city, cep, number, user_id 
      });
      return response.status(200).send();
    } catch(error) {
      return error;
    }
  },

  async show(request, response) {
    try {
      const { user_id } = request.body;
      return response.json(await baseRepository.show('addresses', user_id, 'user_id'));
    } catch(error) {
      return error;
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.body;
      const result = await baseRepository.delete('addresses', id);
      return response.json({ "result": result == 1 ? true : false });
    } catch(error) {
      return error;
    }
  }
}
