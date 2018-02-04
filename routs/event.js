
// BASE SETUP
// ==============================================

var router = require('express').Router();

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it

router.get('/', (req, res) => {
	pool.query('SELECT * from tbl_event', (err,resp)=> {
		console.log(err,resp);
		if (err) {
			res.status(400).send('Problem acessing DB.');
		} else {
			res.send(resp);
		}
		
		pool.end()
	})
});
// ==============================================

//Create New User
router.post('/newuser', function(req, res) {
    res.send('POST handler for /dogs route.');



});



module.exports = router;