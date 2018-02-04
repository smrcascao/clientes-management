// userManagement.js

// BASE SETUP
// ==============================================

var express = require('express');

var router = express.Router();
//connection data base
const {Pool, Client}  = require('pg')
const pool = new Pool({
    database: 'quinta_da_couceira',
    user: 'qcouceira',
    password: 'qcouceira',
    host: 'qcouceira.cmjmvmmgcc89.us-east-2.rds.amazonaws.com',
    port: 5432
})



//const pool = new pg.Pool(connectionString);

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it

router.get('/api', (req, res) => {
	pool.query('SELECT * from tbl_city', (err,resp)=> {
		console.log(err,resp);
		res.send(resp);
		pool.end()
	})
});
// ==============================================

//Create New User
router.post('/newuser', function(req, res) {
    res.send('POST handler for /dogs route.');



});



module.exports = router;