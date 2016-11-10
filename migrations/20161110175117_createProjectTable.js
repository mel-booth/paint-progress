
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('projects', function(table){
    table.increments('id')
    table.string('projectTitle')
    table.string('dateCreated')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
