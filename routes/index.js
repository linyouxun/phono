var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile('./views/index.html');
});


router.get('/slide', function(req, res, next) {
  res.sendfile('./views/slide.html');
});

router.get('/imageSlide', function(req, res, next) {
  res.sendfile('./views/imageSlide.html');
});

module.exports = router;
