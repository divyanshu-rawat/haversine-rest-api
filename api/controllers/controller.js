

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





