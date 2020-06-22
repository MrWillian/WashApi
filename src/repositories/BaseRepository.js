const connection = require("../database/connection.js");

module.exports = {
  async index(entity, columns = '*', joinTable = null, joinColumn = null) {
    if (joinTable) {
      return await connection(entity)
        .select(columns)
        .innerJoin(
          joinTable,
          joinTable + '.id', 
          entity + '.' + joinColumn
        );
    } else {
      return await connection(entity).select('*');
    }
  },

  async create(entity, data) {
    return await connection(entity).insert(data).returning('id');
  },

  async show(entity, data, column = 'id') {
    return await connection(entity).where(column, data).first();
  },

  async delete(entity, data) {
    return await connection(entity).where('id', data).delete();
  }
}