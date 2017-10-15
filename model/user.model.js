const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Defining user schema
 */
const user = new Schema({
    name: {
        type: String, // Data type
        required: true, // Allow null = false
        unique: true // Name must be unique
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now() // Default value
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

/**
 * Creating user collection
 */
const User = mongoose.model('User', user);

/**
 * Exporting module
 */
module.exports = User;