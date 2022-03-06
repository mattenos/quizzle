const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/quizzledb'
);

module.exports = mongoose.connection;