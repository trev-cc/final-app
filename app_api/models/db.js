var mongoose = require('mongoose');

var connection = "mongodb://dbuser:dbpassword@ds141786.mlab.com:41786/heroku_mqq4w8hh";
mongoose.connect(connection, { useMongoClient: true });

mongoose.Promise = global.Promise;

// BRING IN YOUR SCHEMAS & MODELS
require('./member');