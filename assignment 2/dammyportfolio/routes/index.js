var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/ GET home page. /
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/ GET home page. /
router.get('/home', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});
/ GET about page. /
router.get('/about', function(req, res, next) {
  res.render('About', {
    title: 'About'
  });
});

/ GET projects page. /
router.get('/project', function(req, res, next) {
  res.render('project', {
    title: 'Project'
  });
});

/ GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});


module.exports = router;
