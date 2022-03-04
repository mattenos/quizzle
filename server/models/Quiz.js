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
    questions: [Question.schema],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;