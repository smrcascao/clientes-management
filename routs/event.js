
// BASE SETUP
// ==============================================

var router = require('express').Router();

const QUERY_ALL_EVENTS = 'SELECT * FROM tbl_event';
const QUERY_SINGLE_EVENT_id = 'SELECT * FROM tbl_event WHERE id_evento = $1';
const QUERY_CLIENTS_ON_EVENT_id = 'SELECT first_name,last_name FROM tbl_clients WHERE id_client IN (SELECT id_client FROM tbl_contracts WHERE id_evento = $1)';

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it

router.get('/', (req, res) => {
	pool.query(QUERY_ALL_EVENTS, (err,resp)=> {
		console.log(err,resp);
		if (err) {
			res.status(400).send('Problem acessing DB.');
		} else {
			res.send(resp.rows);
		}
	});
});

router.get('/:id', (req, res) => {
	console.log('Retrieving event with ID:',req.params.id);
	pool.connect()
  	.then(client => {
    	client.query(QUERY_SINGLE_EVENT_id, [req.params.id])
      	.then(resp => {
			if (resp.rows[0]) {
				console.log(resp.rows[0]);

				client.query(QUERY_CLIENTS_ON_EVENT_id, [req.params.id])
				.then(respCli => {
					client.release();
					resp.rows[0]['clients']=respCli.rows;
					res.send(resp.rows[0]);
				})
				.catch(err => {
				  console.log('on err');
				  console.log(err.stack);
				  client.release();
				  res.status(400).send(err.stack);
				})

			} else {
				console.log('Not Found!');
				res.sendStatus(404);				
			}
      	})
      	.catch(err => {
			console.log('on err');
			console.log(err.stack);
        	client.release();
			res.status(400).send(err.stack);
      	})
  	})

});

// ==============================================


	  
//Create New Event
router.post('/', function(req, res) {

	pool.connect()
	.then(client => {
		client.query('INSERT INTO tbl_event(creation_date,event_type, section,event_date,children,adults) ' +
		'values($1, $2, $3, $4, $5, $6) RETURNING *', [req.body.creation_date,req.body.event_type,req.body.section,req.body.event_date,req.body.children,req.body.adults])
		.then(resp => {
			client.release();
			res.send(resp.rows[0]);
		})
		.catch(err => {
			console.log('on err');
			console.log(err.stack);
			client.release();
			res.status(400).send(err.stack);
		})
	})

});



module.exports = router;