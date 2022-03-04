const mongoose = require('mongoose');

const { Schema } = mongoose;



const User = mongoose.model('User', userSchema);

module.exports = User;