import gql from "graphql-tag";

export const QUERY_PRODUCTS = gql`
  query getProducts($categories: ID) {
    products(categories: $categories) {
      _id
      name
      description
      price
      quantity
      image
      categories {
        _id
      }
      movieComments {
        _id
        movieCommentText
        createdAt
        username
        productId
      }
    }
  }
`;

export const QUERY_ONE_PRODUCT = gql`
  query product($id: ID!) {
    product(_id: $id) {
      _id
      name
      movieComments {
        _id
        movieCommentText
        createdAt
        username
        productId
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      title
      helpingVerb
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_MOVIE_COMMENT = gql`
  query movieComment($movieCommentText: String) {
    movieComment(movieCommentText: $movieCommentText) {
      _id
      movieCommentText
      createdAt
      username
      productId
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
