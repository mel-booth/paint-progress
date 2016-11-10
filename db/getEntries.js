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
  return knex('entries').insert({entryTitle: obj.entryTitle, date: obj.date, image: obj.image})

}
