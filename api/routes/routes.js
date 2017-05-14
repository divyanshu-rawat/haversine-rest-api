

module.exports = function(app){


	var location = require('../controllers/controller');

	app.route('/post_location').post(location.post_location);

	app.route('/get_location').get(location.get_location)
};