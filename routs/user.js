
// BASE SETUP
// ==============================================

var router = require('express').Router();

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
    res.send(json.parse(req));



});



module.exports = router;