var mongoose = require ("mongoose");

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://ankita:ankita@ds055584.mongolab.com:55584/heroku_t1vh29hx';

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});

var userSchema = new mongoose.Schema({
    id: Number,
    isActive:String,
    age:Number,
    name:String,
    company:String,
    email:String
});

var readlineSync = require('readline-sync');
var answer = readlineSync.question('Enter the primary key in range 0 to 99 :');

var PUser = mongoose.model('Empdata', userSchema);

PUser.findOne({id: answer}, function (err, userObj) {
    if (err) {
        console.log(err);
    } else if (userObj) {
        console.log('Found:', userObj);
    }
});