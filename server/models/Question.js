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
    choices: [{type: String}],
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
    },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;