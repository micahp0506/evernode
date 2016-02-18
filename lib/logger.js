'use strict'


const Log = require('../routes/log');

// When creatimg a middleware function, have to have next as an argument
module.exports = (req, res, next) => {
    Log.create({
        userAgent: req.headers['user-agent'],
        route: req.url,
        verb: req.method
    }, next)
};
