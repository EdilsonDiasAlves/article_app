var express = require('express');
var router = express.Router();

router.get('/articles', function(req, res, next) {
  res.end('Get details of all articles');
});

router.get('/articles/:id', function(req, res, next) {
  res.end('Get details of article with id: ' + req.params.id);
});

router.post('/articles/:id', function(req, res, next) {
  res.end('Store details of article with id ' + req.params.id + ' in the database');
});

router.put('/articles/:id', function(req, res, next) {
  res.end('Update the details of article with id ' + req.params.id + ' in the database');
});
module.exports = router;
