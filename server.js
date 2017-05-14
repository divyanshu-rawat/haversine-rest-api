const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

var mongoose = require('mongoose');
var Task = require('./api/models/models');
var bodyParser = require('body-parser');

var url = 'mongodb://div:12345@ds031975.mlab.com:31975/redcarp';


mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);

console.log('Server Started on Port: ' + port);