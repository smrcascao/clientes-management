// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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
var eventManagement   = require('./routs/event');

app.use('/user',  userManagement);
app.use('/event',  eventManagement);


// listen for requests :)
var listener = app.listen(8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
