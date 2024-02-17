const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }
      return user;
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Can't find this user");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new Error("Wrong password!");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (_, { input }, { user }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }
      const { bookId, authors, description, title, image, link } = input;
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        {
          $addToSet: {
            savedBooks: { bookId, authors, description, title, image, link },
          },
        },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    removeBook: async (_, { bookId }, { user }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
