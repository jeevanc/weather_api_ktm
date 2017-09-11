var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/weather/v1', function(req, res, next) {
  var url = 'http://api.openweathermap.org/data/2.5/forecast?id=1283240&APPID=e62550fd142b3963bccdabe58d43719d'
  request(url, function(error, response, body) {
    // console.log('error:', error);
     //console.log("sffdsf",response);
      var response = JSON.parse(response.body);
      res.json(response);

    });
});

module.exports = router;
