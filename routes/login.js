var express = require('express');
var router = express.Router();
var getUser = require('../db/users')

router.get('/', function(req, res, next) {
  res.render('login')
})

router.post('/', function(req, res, next) {
  console.log(req.body);
  getUser.getUser(req.body)
  .then(function(user) {
    console.log(user);
    if (user.length > 0) {
      res.redirect(`/projects/${user[0].id}`)
    } else res.render('login', {'message':"Incorrect Login Information"})
  })

  .catch(function(err){
    console.log(err);
  })
})
module.exports = router;
