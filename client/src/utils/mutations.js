import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        categories {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MOVIE_COMMENT = gql`
  mutation addMovieComment(
    $movieCommentText: String!
    $productId: String
  ) {
    addMovieComment(
      movieCommentText: $movieCommentText
      productId: $productId
    ) {
      _id
      movieCommentText
      createdAt
      username
      productId
    }
  }
`;

export const DELETE_MOVIE_COMMENT = gql`
  mutation deleteMovieComment(
    $_id: ID!
  ) {
    deleteMovieComment(
      _id: $_id
    ) {
      _id
      movieCommentText
      createdAt
      username
      productId
    }
  }
`;

export const UPDATE_MOVIE_COMMENT = gql`
  mutation updateMovieComment(
    $_id: ID!
    $movieCommentText: String!
  ) {
    updateMovieComment(
      _id: $_id
      movieCommentText: $movieCommentText
    ) {
      _id
      movieCommentText
      createdAt
      username
      productId
    }
  }
`