const bcrypt = require('bcrypt');
const saltRounds = 10; 

module.exports = {
  async encrypt(password) {
    return await genEncrypt(password);
  },

  async decrypt(password, hash) {
    bcrypt.compare(password, hash, function(err, res) {
      if (res == true) {
        return true;
      }
      // else wrong password
    });
  },
}

async function genEncrypt(password) {
  bcrypt.genSalt(saltRounds, (err, salt) => { 
    const result = bcrypt.hash(password, salt, (err, hash) => {
      console.log(hash);
      return { salt, hash };
    });
    console.log('result', result);
  });
}
