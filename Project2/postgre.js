var pg = require("pg");
var fs = require('fs');


var conString = 'postgres://gaqzwsvvgdkbdd:XrFCzZjFtLnctut2ZmAFKOC0px@ec2-54-83-53-120.compute-1.amazonaws.com:5432/deagptclcb4641?ssl=true';

var client = new pg.Client(conString);
client.connect();

client.query("CREATE TABLE IF NOT EXISTS empdata(id varchar(64) PRIMARY KEY, isActive varchar(64) , age varchar(64),name varchar(64), company varchar(64), email varchar(64))");

var obj;
fs.readFile('jsonfile.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    for(var i = 0; i < 100; i++) {


        client.query("INSERT INTO empdata(id, isActive, age, name, company, email) values($1, $2, $3 ,$4, $5, $6)", [obj[i].id, obj[i].isActive, obj[i].age, obj[i].name, obj[i].company, obj[i].email],function (err, result){
            if(err) {
                console.log(err);
            }
        });
    }
    console.log('empdata inserted');
});