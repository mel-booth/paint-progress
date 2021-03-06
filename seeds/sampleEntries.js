
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('entries').insert({id: 1, entryTitle: 'Started new painting', 'date': "6/11/16", 'image': 'http://i.imgur.com/NMD4BK4.jpg', 'project_id': 1}),
        knex('entries').insert({id: 2, entryTitle: 'Filled more white space', 'date': "7/11/16", 'image': 'http://i.imgur.com/HbxDAb1.jpg', 'project_id': 1}),
        knex('entries').insert({id: 3, entryTitle: 'Refined shapes, balancing angles', 'date': "7/11/16", 'image': 'http://i.imgur.com/jh2PAB9.jpg', 'project_id': 1}),
        knex('entries').insert({id: 4, entryTitle: 'Started new painting', 'date': "20/04/16", 'image': 'http://i.imgur.com/SsUFJxG.jpg', 'project_id': 6}),
        knex('entries').insert({id: 5, entryTitle: 'Filled more white space', 'date': "11/11/16", 'image': 'http://i.imgur.com/xylmd3Z.jpg', 'project_id': 6}),
        knex('entries').insert({id: 6, entryTitle: 'I like memes', 'date': "11/11/16", 'image': 'http://i.imgur.com/d1JenM8.jpg', 'project_id': 6})
      ]);
    });
};
