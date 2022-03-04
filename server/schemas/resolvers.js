const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz, Question } = require('../models');
const { signToekn } = require('../utils/auth');

const resolvers = {
    Query: {

    },
    Mutation: {

    },
};

module.exports = resolvers;