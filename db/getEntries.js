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

function setEntry(obj) {
  var dateString = `${obj.dateDay}/${obj.dateMonth}/${obj.dateYear}`
  return knex('entries').insert({entryTitle: obj.entryTitle, date: dateString, image: obj.image})

}

function getEntriesByProjectId(id) {
  return knex('entries').join('projects', 'project_id', id)
}
