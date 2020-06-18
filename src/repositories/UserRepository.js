const baseRepository = require("./BaseRepository");
const encryption = require("../utils/encryption");

module.exports = {
  async index(request, response) {
    try {
      return response.json(await baseRepository.index('users'));
    } catch(error) {
      return error;
    }
  },

  async create(request, response) {
    try {
      const { name, email, password: decryptedPassword, cellphone } = request.body;
      const { 
        iv: initialization_vector, encryptedData: password 
      } = encryption.encrypt(decryptedPassword);

      await baseRepository.create('users', { 
        name, email, password, initialization_vector, cellphone 
      });

      return response.json({ name });
    } catch(error) {
      return error;
    }
  },

  async show(request, response) {
    try {
      const { id } = request.body;
      return response.json(await baseRepository.show('users', id));
    } catch(error) {
      return error;
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.body;
      const result = await baseRepository.delete('users', id);
      return response.json({ "result": result == 1 ? true : false });
    } catch(error) {
      return error;
    }
  }
}