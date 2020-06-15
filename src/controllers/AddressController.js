const addressRepository = require("../repositories/AddressRepository.js");

module.exports = {
  async index(request, response) {
    return await addressRepository.index(request, response);
  },

  async create(request, response) {
    return await addressRepository.create(request, response);
  },

  async show(request, response) {
    return await addressRepository.show(request, response);
  },

  async delete(request, response) {
    return await addressRepository.delete(request, response);
  }
}
