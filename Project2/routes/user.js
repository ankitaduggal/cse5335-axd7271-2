var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.contentType('application/json');
  var person = [
    { name: 'batman', affiliation:'justice league', latitude:25.363, longitude:131.044 },
    { name: 'superman', affiliation:'justice league', latitude:-35.765, longitude:231.054 },
    { name: 'ironman', affiliation:'the avengers', latitude:-45.765, longitude:331.054 },
    { name: 'the thing', affiliation:'fantastic four', latitude:-55.765, longitude:431.054 },
    { name: 'starlord', affiliation:'guardians', latitude:-65.765, longitude:531.054 },
    { name: 'harley quinn', affiliation:'suicide squad', latitude:-75.765, longitude:631.054 },
    { name: 'ras al ghul', affiliation:'LOA', latitude:-85.765, longitude:331.054 },
    { name: 'Ezio auditore', affiliation:'AC', latitude:-95.765, longitude:931.054 },
    { name: 'lex luthor', affiliation:'legion of doom', latitude:-56.765, longitude:831.054 },
    { name: 'robin', affiliation:'teen titans', latitude:-79.765, longitude:731.054 },
  ];
  var personJSON = JSON.stringify(person);
  res.send(personJSON);
});

module.exports = router;
