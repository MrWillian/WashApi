const authRepository = require("../../repositories/auth/AuthRepository");

module.exports = {
  async login(request, response) {
    return await authRepository.login(request, response);
  },
}
