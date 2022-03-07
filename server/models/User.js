const mongoose = require('mongoose');

const { Schema } = mongoose;
const Quiz = require('./Quiz');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    quizzes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quiz',
        },
    ],
})

const User = mongoose.model('User', userSchema);

module.exports = User;