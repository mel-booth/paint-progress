var express = require('express');
var router = express.Router();
var getEntries = require('../db/getEntries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  getEntries.getEntries()
  .then(function(entries){
    entries.reverse()
    res.render('displayProject', {entries, 'name': "Harrison", })
    console.log(entries);
  })
  .catch(function(err){
    console.log(err);
  })
  // console.log(getEntries.getEntries());
});

router.get('/:projectId', function(req, res) {
    //getUser projects
    console.log("project id = ", req.params.projectId);
    getEntries.getEntriesByProjectId(req.params.projectId)
      .then(function(entries) {
        if (entries.length === 0) res.render('displayProject')
        console.log("result", entries);
        res.render('displayProject', {entries, 'name': entries[0].userName,
        'projectName': entries[0].projectTitle, 'user_id': String(entries[0].user_id), 'project_id': String(entries[0].project_id)})
      })
})



router.get('/', function(req, res, next) {
  res.render('newEntry')
  // console.log(getEntries.getEntries());
});

router.post('/', function(req, res, next) {
  getEntries.setEntry(req.body)
  .then(function(done){
    res.redirect('/entries')
  })
  .catch(function(err){
    console.log(err);
  })
})
module.exports = router;
