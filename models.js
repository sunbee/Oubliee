var mongoose = require("mongoose");
var _ = require("underscore");

module.exports = function(wagner) {
    // Connect to the database
    mongoose.connect("mongodb://localhost:27017/oubliee");
    
    // Make a mongoose model
    var Oubliee = mongoose.model('Oubliee', require("./oubliee.js"), 'oubliees')
    
    // Register model as a service with wagner
    var Models = {
        Oubliee: Oubliee,
    };
    _.each(Models, function(value, key) {
        wagner.factory(key, function() {
            return value;
        });
    });
    
    // Return
    return Models;
};
