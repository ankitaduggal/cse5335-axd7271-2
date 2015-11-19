var mongoose = require ("mongoose");
var fs = require('fs');

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

var PUser = mongoose.model('Empdata', userSchema);

fs.readFile('jsonfile.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    for(var i = 0; i <=99; i++) {

        var ankita = new PUser ({
            id: obj[i].id,
            isActive:obj[i].isActive,
            age:obj[i].age,
            name:obj[i].name,
            company:obj[i].company,
            email:obj[i].email
        });

        ankita.save(function (err) {
            if (err) {
                console.log ('Error on save 1 !')
                console.log(err);
            }

        });
    }
    console.log('data inserted');

});