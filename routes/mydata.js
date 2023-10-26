var express = require('express');
var router = express.Router();

/* GET My intro page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Kumar Maram' });
});

module.exports = router;
