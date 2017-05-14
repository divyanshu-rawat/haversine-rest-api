

var mongoose = require('mongoose');

var Location = mongoose.model('Location');

exports.get_location = function(req,res){

	Location.find({},function (err,location) {
		if(err)
			res.send(err)
		res.json(location);
	});
};


exports.post_location = function (req,res) {
	 new_location = Location(req.body);
	
	 new_location.save(function (err,location) {
	 	 if(err)
	 	 	res.send(err);
	 	 res.json(location);
	 }); 
};
