import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_QUIZZES = gql`
  query quizzes {
    _id
    name
    category
    author
  }
`

export const QUERY_QUIZ = gql`
  query quiz($quizId: ID!) {
    quiz(quizId: $quizId) {
      _id
      name
      category
      author
      questions {
        _id
        title
        choices
      }
    }
  }
`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      quizzes {
        _id
        name
        category
      }
    }
  }
`