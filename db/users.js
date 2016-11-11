var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || "development"]
var knex = Knex(knexConfig)

module.exports = {
  getUser,
  getUserByUsername,
  getProjectsByUserId,
  newProject
}

function getUser(obj) {
  return knex('users').where('userName', obj.user).andWhere('password', obj.password)
}

function getUserByUsername(username) {
  return knex('users').where('userName', username)
}

function getProjectsByUserId(id) {
  return knex('users').join('projects', 'projects.user_id', id)
}

function newProject(obj, userId) {
  var dateString = `${obj.dateDay}/${obj.dateMonth}/${obj.dateYear}`

  return knex('projects').insert({'projectTitle': obj.projectTitle, 'dateCreated': dateString, 'user_id': userId})

}
