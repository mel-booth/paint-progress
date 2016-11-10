var express = require('express');
var router = express.Router();
var users = require('../db/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/login')
});

router.get('/:userId', function(req, res) {
  //console.log(req.params.userId);
  users.getProjectsByUserId(req.params.userId)
    .then(function(projects) {
      console.log(projects);
      res.render('projects', {projects, 'name': projects[0].userName, 'id': req.params.userId})
    })
})

module.exports = router;
