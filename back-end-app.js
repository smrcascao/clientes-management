// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

//connection data base
const {Pool, Client}  = require('pg')
global.pool = new Pool({
    database: 'quinta_da_couceira',
    user: 'qcouceira',
    password: 'qcouceira',
    host: 'qcouceira.cmjmvmmgcc89.us-east-2.rds.amazonaws.com',
    port: 5432
})

var userManagement    = require('./routs/user');
//    cats    = require('./routes/cats'),
//    birds   = require('./routes/birds');


app.use('/user',  userManagement);



// listen for requests :)
var listener = app.listen(8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
