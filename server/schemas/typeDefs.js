const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    title: String
    helpingVerb: String
    orderControl: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    categories: [Category]
    movieComments: [MovieComment]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type MovieComment {
    _id: ID
    movieCommentText: String
    createdAt: String
    username: String
    productId: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(categories: ID, name: String): [Product]
    product(_id: ID!): Product
    users: [User]
    user: User
    order(_id: ID!): Order
    movieComment(movieCommentText: String): [MovieComment]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    addMovieComment(movieCommentText: String!, productId: String): MovieComment
    deleteMovieComment(_id: ID!): MovieComment
    updateMovieComment(_id: ID!, movieCommentText: String!): MovieComment
    updateUser(
      username: String
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

//Keeping just in case you need this one back
// removeMovieComment(_id: ID!, productId: ID!): Product
