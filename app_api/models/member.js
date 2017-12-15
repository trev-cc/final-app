var mongoose = require('mongoose');

var memberSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    lat: Number,
    lon: Number
});

var members = mongoose.model('member', memberSchema, 'member');


