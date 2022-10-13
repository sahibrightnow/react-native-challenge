const mongoose = require('mongoose');

const mongoClient = process.env.DB_CONNECTION;

module.exports = mongoose.connect(mongoClient);