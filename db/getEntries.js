var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || "development"]
var knex = Knex(knexConfig)

module.exports = {
  getEntries,
  setEntry
}

function getEntries() {
  return knex('entries')
}

function setEntry(obj) {
  var dateString = (obj.dateDay || 0) + '/' + (obj.dateMonth || 0) + '/' + (obj.dateYear || 0)
  return knex('entries').insert({entryTitle: obj.entryTitle, date: dateString, image: obj.image})

}
