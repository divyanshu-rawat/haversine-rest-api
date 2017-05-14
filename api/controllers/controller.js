

var mongoose = require('mongoose');

var Location = mongoose.model('Location');
var User     = mongoose.model('User');
var jwt = require('jsonwebtoken');
var express = require('express');
var config = require('../../config.js');

var app = express();

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

exports.basic_route = function (req,res) {
	     res.json({ message: 'Welcome to the API !' });
}

exports.register_user = function (req,res) {
	 
		 var newUser = new User({ 

		    username: req.body.username, 
		    password: req.body.password,
		    admin: req.body.admin 

  		});
   		  newUser.save(function(err,user) {
    		
    		if (err) throw err;
    		console.log('User saved successfully');
    		res.json(user);

});

}

exports.get_users = function(req,res){

	User.find({},function (err,user) {
		if(err)
			res.send(err)
		res.json(user);
	});
};


exports.authenticate = function(req, res) {

// Finding User

  User.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) throw err;

    if (!user) {

      res.json({ success: false, message: 'Authentication failed. User not found.' });
    
    } 
    else if (user) {

      // Checking User Password 
      
      if (user.password != req.body.password) {

        
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } 
      else {

        // If User Is Found And Password Is Right
        // Create a JWT 

        var token = jwt.sign(user, config.secret, {
          
          expiresIn : 60*60*24
          // expires in 24 hours

        });

        // return the information including token as JSON

        res.json({
          success: true,
          message: 'JWT created Enjoy!',
          token: token
        });
      }   

    }

  });

};


exports.get_using_self = function (req,res) {

	Location.find({},function (err,location) {
		if(err)
			res.send(err)

		var updated_data = [];

		console.log(req.body.lat,req.body.lng,req.body.radius);

		var test_case = {

			lat:req.body.lat,
			lng:req.body.lng

		};

		for (let value of location) {
		   var distance = Haversine(test_case.lat,test_case.lng,value.lat,value.lng);

		   console.log('distance: ' + distance);

		  if(distance < req.body.radius)
		  {
		  	 updated_data.push(value);
		  }

		}


		console.log(updated_data);

		res.json(updated_data);

	});
	
}


// using the ‘Haversine’ formula to calculate distance between given (Latitude,longitude) pairs.

function Haversine(lat1,lon1,lat2,lon2) {

  var R = 6371; // Radius of the earth in km
  var dLat = degree_to_radian(lat2-lat1);  // deg2rad below
  var dLon = degree_to_radian(lon2-lon1); 
  
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(degree_to_radian(lat1)) * Math.cos(degree_to_radian(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function degree_to_radian(deg) {
  return deg * (Math.PI/180)
}



