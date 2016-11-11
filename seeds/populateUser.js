
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, userName: 'Harrison', password: 'lemons'}),
        knex('users').insert({id: 2, userName: 'koolkate', password: 'limes'})
      ]);
    });
};
