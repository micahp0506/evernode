'use strict'


const mongoose = require('mongoose');

module.exports = mongoose.model('Logs',
    mongoose.Schema({
        userAfent: String,
        route: String,
        verb: String
}));
