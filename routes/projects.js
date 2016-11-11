var express = require('express');
var router = express.Router();
var users = require('../db/users')
var getEntries = require('../db/getEntries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/login')
});

router.get('/:userId/new', function(req, res) {
  console.log("userId params", req.params.userId)
  users.getProjectsByUserId(Number(req.params.userId))
    .then(function(projects) {
      console.log("projects",projects)
      if (projects.length === 0) res.redirect('/login')
      else res.render('newProject', {'username' : projects[0].userName, 'userId': String(projects[0].user_id)})
    })
    .catch(function(err){
      console.log(err);
    })
})

router.post('/:userId', function(req, res) {
  console.log("form request = ", req.body)
  users.newProject(req.body, req.params.userId)
    .then(function(result) {
      res.redirect(`/projects/${req.params.userId}`)
    })
    .catch(function(err){
      console.log(err);
    })
})

router.get('/:userId', function(req, res) {
  //console.log(req.params.userId);
  users.getProjectsByUserId(req.params.userId)
    .then(function(projects) {
      console.log("rendering projects", projects);
      res.render('projects', {projects, 'name': projects[0].userName, 'userId': req.params.userId })
    })
    .catch(function(err){
      console.log(err);
    })
})

router.get('/:userId/entries/:projectId/new', function(req, res) {
  users.getProjectsByUserId(req.params.userId)
    .then(function(projects) {
      console.log("new project get output", projects)
      res.render('newEntry', {'projectTitle': projects[0].projectTitle, 'username': projects[0].userName,'projectId': String(req.params.projectId), 'user_id': String(req.params.userId)})
    })
    .catch(function(err){
      console.log(err);
    })

})

router.post('/:userId/entries/:projectId', function(req, res) {
  console.log(req)
  getEntries.setEntry(req.body, req.params.projectId)
    .then(function(){
      res.redirect(`/projects/${req.params.userId}/entries/${req.params.projectId}`)
    })
    .catch(function(err){
      console.log(err);
    })

})


module.exports = router;
