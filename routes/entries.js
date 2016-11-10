var express = require('express');
var router = express.Router();
var getEntries = require('../db/getEntries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  getEntries.getEntries()
  .then(function(entries){
    entries.reverse()
    res.render('displayProject', {entries, 'name': "Harrison", 'projectName': "Footprints"})
    console.log(entries);
  })
  .catch(function(err){
    console.log(err);
  })
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
