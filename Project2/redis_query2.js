var redis = require('redis');
var client = require('redis').createClient('redis://h:pepc8p9napfsu63n6tdlah2h62e@ec2-54-83-59-218.compute-1.amazonaws.com:10989');

var data = "demo";


client.on('connect', function() {
    console.log('connected');
});

client.exists('1', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
});

var readlineSync = require('readline-sync');
var answer = readlineSync.question('Enter isActive :');


for(var i = 0; i <=99; i++) {

    client.hgetall(i, function (err, object) {
        if(object.isActive == answer)
            console.log(object);
    });
}