const db = require('./connection');
const { User, Quiz, Question } = require('../models');

db.once('open', async() => {
    await Question.deleteMany();
    await Quiz.deleteMany();
    await User.deleteMany();

    process.exit();
})