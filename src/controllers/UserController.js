const userRepository = require("../repositories/UserRepository.js");

module.exports = {
  async index(request, response) {
    return await userRepository.index(request, response);
  },

  async create(request, response) {
    return await userRepository.create(request, response);
  },

  async show(request, response) {
    return await userRepository.show(request, response);
  },

  async delete(request, response) {
    return await userRepository.delete(request, response);
  }
}
