
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
router.post('/user', function(req, res) {

    response=''

console.log('INSERT INTO tbl_clients(creation_date, first_name, middle_name, last_name, sex)' +
    'VALUES (CURRENT_TIMESTAMP, \''+JSON.stringify(req.body.first_name)+'\', \''+JSON.stringify(req.body.midle_name)+'\', \''+JSON.stringify(req.body.last_name)+'\', \''
    +JSON.stringify(req.body.sex)+'\');')


    pool.query('INSERT INTO tbl_clients(creation_date, first_name, middle_name, last_name, sex)' +
        'VALUES (CURRENT_TIMESTAMP, \''+JSON.stringify(req.body.first_name)+'\', \''+JSON.stringify(req.body.midle_name)+'\', \''+JSON.stringify(req.body.last_name)+'\', \''
        +JSON.stringify(req.body.sex)+'\');'

        , (err,resp)=> {
            console.log(err,resp)

    })



    res.send(JSON.stringify(req.body.first_name)+" \n "+JSON.stringify(response));



});



module.exports = router;