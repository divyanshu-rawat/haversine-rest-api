

module.exports = function(app){


	var callback = require('../controllers/controller');
	var config = require('../../config.js');
	var jwt = require('jsonwebtoken');

	app.post('/authenticate', callback.authenticate);

	// route middleware to verify a token

	// route middleware to verify a token

		app.use(function(req, res, next) {

		  // check header or url parameters or post parameters for token
		  var token = req.body.token || req.query.token || req.headers['x-access-token'];

		  // decode token
		  if (token) {

		    // verifies secret and checks exp
		    jwt.verify(token, config.secret, function(err, decoded) {      
		      if (err) {
		        return res.json({ success: false, message: 'Failed to authenticate token.' });    
		      } else {
		        // if everything is good, save to request for use in other routes
		        req.decoded = decoded;    
		        next();
		      }
		    });

		  } else {

		    // if there is no token
		    // return an error
		    return res.status(403).send({ 
		        success: false, 
		        message: 'No token provided.' 
		    });

		  }
		});



	app.post('/post_location',callback.post_location);

	app.get('/get_location',callback.get_location);

	app.get('/',callback.basic_route);

	app.post('/register',callback.register_user);

	app.get('/users',callback.get_users);

	app.post('/get_using_self',callback.get_using_self);

	app.post('/get_using_mongodb',callback.get_using_mongodb);

};