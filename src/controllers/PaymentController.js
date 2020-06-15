const paymentRepository = require("../repositories/PaymentRepository.js");

module.exports = {
  async index(request, response) {
    return await paymentRepository.index(request, response);
  },

  async create(request, response) {
    return await paymentRepository.create(request, response);
  },

  async show(request, response) {
    return await paymentRepository.show(request, response);
  },

  async delete(request, response) {
    return await paymentRepository.delete(request, response);
  }
}
