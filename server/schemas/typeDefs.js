const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {

    }

    type Quiz {

    }
    
    type Question {

    }

    type Auth {
        token: ID
        user: User
    }

    type Query {

    }

    type Mutation {

    }
`;

module.exports = typeDefs;