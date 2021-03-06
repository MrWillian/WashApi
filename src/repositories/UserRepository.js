const baseRepository = require("./BaseRepository");
const bcrypt = require('bcrypt');

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

      bcrypt.genSalt(10, (err, salt) => { 
        bcrypt.hash(decryptedPassword, salt, async (err, hash) => {
          const result = await baseRepository.create('users', { 
            name, email, password: hash, initialization_vector: salt, cellphone 
          });
          const id = result[0];
          return response.json({ id, name, email, cellphone });
        });
      });

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