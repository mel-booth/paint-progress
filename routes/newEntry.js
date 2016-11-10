var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newEntry')
  // console.log(getEntries.getEntries());
});

module.exports = router;
