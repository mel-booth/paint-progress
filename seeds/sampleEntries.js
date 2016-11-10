
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('entries').insert({id: 1, entryTitle: 'Started new painting', 'date': "6/11/16", 'image': 'http://i.imgur.com/NMD4BK4.jpg'}),
        knex('entries').insert({id: 2, entryTitle: 'Filled more white space', 'date': "7/11/16", 'image': 'http://i.imgur.com/HbxDAb1.jpg'}),
        knex('entries').insert({id: 3, entryTitle: 'Refined shapes, balancing angles', 'date': "7/11/16", 'image': 'http://i.imgur.com/jh2PAB9.jpg'})
      ]);
    });
};
