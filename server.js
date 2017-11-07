// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
require('dotenv').config();


// ---------------------------------------------------------
// Init & Config
// ---------------------------------------------------------

// DB Connection
//mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = require('bluebird');
expressLogging = require('express-logging');
logger = require('logops');

// Logging
if (process.env.Name == 'DEV' || process.env.Name == 'STAGE')
    logger.setLevel('DEBUG');           // ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']
else
    logger.setLevel('ERROR');           // ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']


// ---------------------------------------------------------
// Authentication Middleware
// ---------------------------------------------------------



// ---------------------------------------------------------
// Static File Routes (SPAs)
// ---------------------------------------------------------

// Example
// app.use('/app/app', express.static(__dirname + '/../client/public/app/app'));


// Routes
app.use('/api/users', require('./routes/user.route'));

// Start Server
app.listen(3000);
console.log('API is running on port 3000');