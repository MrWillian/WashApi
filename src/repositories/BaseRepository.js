const connection = require("../database/connection.js");

module.exports = {
  async index(entity) {
    return await connection(entity).select('*');
  },

  async create(entity, data) {
    return await connection(entity).insert(data);
  },

  async show(entity, data, column = 'id') {
    return await connection(entity).where(column, data).first();
  },

  async delete(entity, data) {
    return await connection(entity).where('id', data).delete();
  }
}