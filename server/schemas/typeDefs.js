const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        quizzes: [Quiz]
    }

    type Quiz {
        _id: ID!
        name: String!
        category: String!
        author: String
        questions: [Question]
    }
    
    type Question {
        _id: ID!
        title: String!
        answer: String!
        choices: [String]!
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        quizzes: [Quiz]
        quiz(quizId: ID!) : Quiz
        questions: [Question]
        me: User
    }

    type Mutation {
        addUser(
            username: String!
            email: String!
            password: String!
        ) : Auth
        addQuiz(
            name: String!
            category: String!
            author: String
        ) : Quiz
        addQuestion(
            quizId: ID!
            title: String!
            answer: String!
            choices: [String]!
        ) : Question
        login(
            username: String!
            password: String!
        ): Auth
    }
`;

module.exports = typeDefs;