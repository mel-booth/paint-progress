
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({id: 6, projectTitle: 'Kate is Kool', dateCreated: '11/11/16', user_id: 2}),
      ]);
    });
};
