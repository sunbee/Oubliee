var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var oublieeSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    remDate: {
        type: Date,
    },
    Email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    Phone: {
        type: String,
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Please provide a valid phone no e.g. +91 7700001000'],
    }
});

module.exports = oublieeSchema;