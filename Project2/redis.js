var client = require('redis').createClient('redis://h:pepc8p9napfsu63n6tdlah2h62e@ec2-54-83-59-218.compute-1.amazonaws.com:10989');
var fs = require('fs');
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

client.on('connect', function() {
    console.log('connected');
});


var obj;
fs.readFile('jsonfile.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    for(var i = 0; i <=99; i++) {

        client.hmset(i, {
            id: obj[i].id,
            isActive:obj[i].isActive,
            age:obj[i].age,
            name:obj[i].name,
            company:obj[i].company,
            email:obj[i].email
        });

    }
    console.log('data inserted');

});