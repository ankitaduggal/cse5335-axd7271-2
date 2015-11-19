var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.contentType('application/json');
  var people = [
    { name: 'Dave', location: 'Atlanta' },
    { name: 'Santa Claus', location: 'North Pole' },
    { name: 'Man', location: 'The Moon' },
    { name: 'Man', location: 'The Moon' },
    { name: 'Man', location: 'The Moon' }
  ];
  var peopleJSON = JSON.stringify(people);
  res.send(peopleJSON);
  //res.send('respond with a resource');
});

module.exports = router;
