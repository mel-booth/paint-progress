
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('entries').insert({id: 1, entryTitle: 'Started new painting', 'date': "20/04/16", 'image': 'http://i.imgur.com/SsUFJxG.jpg', 'project_id': 6}),
        knex('entries').insert({id: 2, entryTitle: 'Filled more white space', 'date': "11/11/16", 'image': 'http://i.imgur.com/xylmd3Z.jpg', 'project_id': 6}),
        knex('entries').insert({id: 3, entryTitle: 'I like memes', 'date': "11/11/16", 'image': 'http://i.imgur.com/d1JenM8.jpg', 'project_id': 6})
      ]);
    });
};
