var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || "development"]
var knex = Knex(knexConfig)

module.exports = {
  getEntries,
  setEntry,
  getEntriesByProjectId
}

function getEntries() {
  return knex('entries')
}

function setEntry(obj, project_id) {
  var dateString = `${obj.dateDay}/${obj.dateMonth}/${obj.dateYear}`
  return knex('entries')
    .insert({entryTitle: obj.entryTitle, date: dateString, image: obj.image, project_id: Number(project_id)})

}

function getEntriesByProjectId(id) {
  return knex('entries')
    .join('projects','entries.project_id', 'projects.id')
    .where('entries.project_id', Number(id))
    .join('users', 'user_id', 'users.id')
    .orderBy('entries.id', 'desc')
}
