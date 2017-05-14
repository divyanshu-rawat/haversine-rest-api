var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var locationSchema = new Schema({
  name: {
    type: String,
    Required: true
  },
  lat:{
  	type: Number,
  	Required: true
  },
  lng:{
  	type: Number,
  	Required: true
  }
});

module.exports = mongoose.model('Location', locationSchema);