// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var userManagement    = require('./routs/userManagement');
//    cats    = require('./routes/cats'),
//    birds   = require('./routes/birds');


app.use('/userManagement',  userManagement);


app.get('/', function(req, res) {
    res.send('Até agora esta a ser espectacular!!!!!!! :).');
});

// listen for requests :)
var listener = app.listen(8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
