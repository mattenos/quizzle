import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_QUIZ = gql`
  mutation addQuiz($name: String!, $category: String!, $author: String) {
    addQuiz(name: $name, category: $category, author: $author) {
      _id
      name
      category
      author
    }
  }
`

export const ADD_QUESTION = gql`
  mutation addQuestion($title: String!, $answer: String!, $choices: [String]!, $category: String) {
    addQuestion(title: $title, answer: $answer, choices: $choices, category: $category) {
      _id
      title
      answer
      choices
    }
  }
`