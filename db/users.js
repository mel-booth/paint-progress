var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || "development"]
var knex = Knex(knexConfig)

module.exports = {
  getUser,
  getUserByUsername,
  getProjectsByUserId
}

function getUser(obj) {
  return knex('users').where('userName', obj.user).andWhere('password', obj.password)
}

function getUserByUsername(username) {
  return knex('users').where('userName', username)
}

function getProjectsByUserId(id) {
  return knex('projects').join('users', 'user_id', id)
}
