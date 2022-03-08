const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return User.find().populate('quizzes');
        },
        user: async (parent, { username }, context) => {
            return (await User.findOne({ username: username }).populate('quizzes'));
        },
        quizzes: async (parent, args, context) => {
            return Quiz.find().populate('questions');
        },
        quiz: async (parent, { quizId }, context) => {
            return (await Quiz.findOne({ _id: quizId }).populate('questions'));
        },
        questions: async (parent, args, context) => {
            return Question.find();
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addQuiz: async (parent, { name, category, author }, context) => {
            // if (context.user) {
                const quiz = await Quiz.create({
                    name: name,
                    category: category,
                    author: author,
                });
                console.log(quiz);
                await User.findOneAndUpdate(
                    { username: author }, 
                    { $push: { quizzes: quiz },
                });

                return quiz;
            // }
        },

        addQuestion: async (parent, { title, answer, choices, quizId }, context) => {
            const question = await Question.create({
                title: title,
                answer: answer,
                choices: choices,
            });
            await Quiz.findOneAndUpdate(
                { _id: quizId }, 
                { $push: { questions: question },
            })

            return question;
        },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;