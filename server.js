var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var jwt = require('jsonwebtoken');
var router  = express.Router();


var port = process.env.PORT || 4000;

var Task = require('./api/models/coordinates');
var User   = require('./api/models/User');

var config = require('./config');


mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("Connected correctly to server");

});

// secret variable
// app.set('secretKey', config.secret); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// using morgan to log requests to the console
app.use(morgan('dev'));

app.use('/api', router);

var routes = require('./api/routes/routes');

routes(router);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.set('port', (process.env.PORT || 5000));

app.listen(port);

console.log('Server Started on Port: ' + port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});