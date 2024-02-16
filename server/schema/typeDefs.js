const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    title: String
    author: String
  }

  type Query {
    me: User
    getUser(id: ID, username: String): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): AuthUser
    login(email: String!, password: String!): AuthUser
    saveBook(bookId: ID!, title: String!, author: String!): User
    deleteBook(bookId: ID!): User
  }

  type AuthUser {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
