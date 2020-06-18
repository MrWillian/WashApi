const connection = require("../../database/connection.js");

module.exports = {
  async login(request, response) {
    const { email } = request.body;
    let query = connection('users')
      .select('id','name','email','cellphone')
      .where('email', email).first();

    query.then(function (result) {
      return response.status(200).json(result);
    }).catch(function (error) { return response.status(400).json(error); });
  },
}
