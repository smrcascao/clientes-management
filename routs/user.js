// userManagement.js

// BASE SETUP
// ==============================================

var express = require('express');

var router = express.Router();
//connection data base



//const pool = new pg.Pool(connectionString);

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it


router.get('/', function(req, res) {
	console.log("asdas");
    res.send('GET handler for /dogs route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /dogs route.');
});


const {Pool, Client}  = require('pg')
const pool = new Pool({
  database: 'quinta_da_couceira',
  user: 'qcouceira',
  password: 'qcouceira',
  host: 'qcouceira.cmjmvmmgcc89.us-east-2.rds.amazonaws.com',
  port: 5432
})

router.get('/api', (req, res) => {
	pool.query('SELECT * from tbl_city', (err,resp)=> {
		console.log(err,resp);
		res.send(resp);
		pool.end()
	})
	  
});


module.exports = router;