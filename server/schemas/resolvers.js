const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return User.find();
        },
        quizzes: async (parent, args, context) => {
            return Quiz.find();
        },
        questions: async (parent, args, context) => {
            return Question.find();
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return{ token, user };
        },

        addQuiz: async (parent, args, context) => {
            const quiz = await Quiz.create(args);
            await User.findByIdAndUpdate(context.user.id, {
                $push: { quizzes: quiz },
            });

            return quiz;
        },

        addQuestion: async (parent, args, context) => {
            console.log(args);
            console.log(context.quiz);
            const question = await Question.create(args);
            await Quiz.findByIdAndUpdate(context.quiz.id, {
                $push: { questions: question },
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