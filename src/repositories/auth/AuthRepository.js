const connection = require("../../database/connection.js");
const bcrypt = require('bcrypt');

module.exports = {
  async login(request, response) {
    const { email, password: decryptedPassword } = request.body;

    let query = connection('users')
      .select('id','name','email','cellphone', 'password', 'initialization_vector')
      .where('email', email).first();

    query.then(async function (result) {
      bcrypt.compare(decryptedPassword, result.password, function(err, res) {
        if (res == true)
          return response.status(200).json(result);
        
        return response.status(401).send();
      });

    }).catch(function (error) { return response.status(400).json(error); });
  },
}
