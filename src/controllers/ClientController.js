const clientRepository = require("../repositories/ClientRepository.js");

module.exports = {
  async index(request, response) {
    return await clientRepository.index(request, response);
  },

  async create(request, response) {
    return await clientRepository.create(request, response);
  },

  async show(request, response) {
    return await clientRepository.show(request, response);
  },
}
