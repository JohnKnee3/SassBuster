const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order, MovieComment } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },
    categories: async () => {
      return await Category.find().sort({ orderControl: +1 });
    },
    products: async (parent, { categories, name }) => {
      const params = {};

      if (categories) {
        params.categories = categories;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params)
        .sort({ name: +1 })
        .populate("categories")
        .populate("movieComments");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id)
        .populate("categories")
        .populate("movieComments");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "categories",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "categories",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    movieComment: async (parent, { username }) => {
      const params = username ? { username } : {};
      return MovieComment.find(params).sort({ createdAt: -1 });
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    // addMovieComment: async (
    //   parent,
    //   { productId, movieCommentText },
    //   context
    // ) => {
    //   if (context.user) {
    //     const updatedProduct = await Product.findOneAndUpdate(
    //       { _id: productId },
    //       {
    //         $push: {
    //           movieComments: {
    //             movieCommentText,
    //             username: context.user.username,
    //             productId:
    //           },
    //         },
    //       },
    //       { new: true, runValidators: true }
    //     );

    //     return updatedProduct;
    //   }

    //   throw new AuthenticationError("You need to be logged in!");
    // },
    addMovieComment: async (parent, { ...args }, context) => {
      console.log("I am args", args);
      console.log("I am {...args}", { ...args });
      if (context.user) {
        const comment = await MovieComment.create({
          productId: args.productId,
          movieCommentText: args.movieCommentText,
          username: context.user.username,
        });

        await Product.findByIdAndUpdate(
          args.productId,
          {
            $push: {
              movieComments: comment,
            },
          },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // //This works but deleteMovie comment seems to do the same in less code
    // removeMovieComment: async (parent, args, context) => {
    //   if (context.user) {
    //     const updatedProduct = await Product.findOneAndUpdate(
    //       { _id: args.productId },
    //       { $pull: { movieComments: args._id } },
    //       { new: true }
    //     );
    //     await MovieComment.findOneAndDelete({
    //       _id: args._id,
    //     });
    //     return updatedProduct;
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    deleteMovieComment: async (parent, args, context) => {
      if (context.user) {
        const updatedMovieComment = await MovieComment.findOneAndDelete({
          _id: args._id,
        });
        return updatedMovieComment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateMovieComment: async (parent, args, context) => {
      console.log(args._id);
      if (context.user) {
        const updatedMovieComment = await MovieComment.findByIdAndUpdate(
          args._id,
          { movieCommentText: args.movieCommentText },
          { new: true }
        );
        return updatedMovieComment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // await Product.findByIdAndUpdate(
    //   { _id: productId },
    //   {
    //     $push: {
    //       movieComments: {
    //         movieCommentText: movieCommentText,
    //         productId: productId
    //       },
    //     },
    //   },
    //   { new: true }
    // );

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
