const mongoose = require('mongoose');
const promise = require('bluebird');

/**
 * Set mongoose default promise
 */
mongoose.Promise = promise;

/**
 * Connecting to DB
 */
mongoose.connect('mongodb://127.0.0.1:27017/nodejs-simple-api', {
    useMongoClient: true
}).then(function () {
    console.log('Connected to DB!');
}, function (err) {
    throw new Error(err);
});