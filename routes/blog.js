
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/trading/options-strategy', function(req, res, next) {
  res.render('blog/trading/options-strategy/index',
  {
	  title: 'Options Strategy:',
	  subTitle: 'PUTting Market Trends'
  });
});

module.exports = router;
