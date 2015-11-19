var pg = require("pg");
var fs = require('fs');


var conString = 'postgres://gaqzwsvvgdkbdd:XrFCzZjFtLnctut2ZmAFKOC0px@ec2-54-83-53-120.compute-1.amazonaws.com:5432/deagptclcb4641?ssl=true';


var client = new pg.Client(conString);
client.connect();

var readlineSync = require('readline-sync');
var answer = readlineSync.question('Enter the isActive (true or false) :');

answer = ''+answer;


var query = client.query('SELECT * FROM empdata WHERE isActive = ($1)',[answer]);
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});