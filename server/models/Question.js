const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    choices: [{
        optionA: String,
        optionB: String,
        optionC: String,
        optionD: String,
    }]
})

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;