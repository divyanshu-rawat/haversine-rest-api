


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DataSchema = new Schema({
  properties: {
  	name: { type: String, required: true }
  },
  location: {
  	type: { type: String, required: true },
    coordinates: { type: [Number], index: '2dsphere'}
  }
});


module.exports = mongoose.model('Geojson', DataSchema);

