const companyRepository = require("../repositories/CompanyRepository.js");

module.exports = {
  async index(request, response) {
    return await companyRepository.index(request, response);
  },

  async create(request, response) {
    return await companyRepository.create(request, response);
  },

  async show(request, response) {
    return await companyRepository.show(request, response);
  },
}
