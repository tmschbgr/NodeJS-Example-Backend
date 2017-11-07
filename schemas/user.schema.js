// Dependencies
var mongoose = require('mongoose');

// Schema
var userSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        default: null,
        maxlength: 100
    },
    givenName: {
        type: String,
        default: null,
        maxlength: 100
    },
    surname: {
        type: String,
        default: null,
        maxlength: 100
    },
    mail: {
        type: String,
        require: true,
        maxlength: 100
    }
});


// Return Model
module.exports = userSchema;