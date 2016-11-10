
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('entries', function(table){
    table.increments('id')
    table.string('entryTitle')
    table.string('date')
    table.string('image')
    table.integer('project_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('entries')
};
