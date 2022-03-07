const mongoose = require('mongoose');

const { Schema } = mongoose;
const Question = require('./Question');

const quizSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question',
        },
    ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;