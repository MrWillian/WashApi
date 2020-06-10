exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Teste 1', email: 'teste1@gmail.com', password: '123456', cellphone: '777777-7777'},
        {id: 2, name: 'Teste 2', email: 'teste2@gmail.com', password: '123456', cellphone: '888888-8888'},
        {id: 3, name: 'Teste 3', email: 'teste3@gmail.com', password: '123456', cellphone: '777777-9999'},
        {id: 4, name: 'Teste 4', email: 'teste4@gmail.com', password: '123456', cellphone: '777777-0000'},
      ]);
    });
};
