var express = require('express');
var router = express.Router();
var getEntries = require('../db/getEntries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  getEntries.getEntries()
  .then(function(entries){
    entries.reverse()
    res.render('displayProject', {entries})
    console.log(entries);
  })
  // console.log(getEntries.getEntries());
});

router.post('/', function(req, res, next) {
  console.log(typeof req.body)
  getEntries.setEntry(req.body)
  .then(function(done){
    console.log(done)
    res.redirect('/entries')
  })
})
module.exports = router;
