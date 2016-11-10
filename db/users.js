var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || "development"]
var knex = Knex(knexConfig)

module.exports = {
  getUser
}

function getUser(obj) {
  console.log("db file obj",obj);
  return knex('users').where('userName', obj.user).andWhere('password', obj.password)
}

function getUserByUsername(username) {
  return knex('users').where('userName', username)
}
