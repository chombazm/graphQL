import Post from '../models/Post.models.js';

const resolvers = {
  Query: {
    getAllPosts: async () => {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw err;
      }
    },
    getPost: async (_, { id }) => {
      try {
        const post = await Post.findById(id);
        return post;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createPost: async (_, { input }, context, info) => {
      try {
        const post = await Post.create(input);
        return post;
      } catch (err) {
        throw err;
      }
    },
    deletePost: async (_, { id }) => {
      try {
        await Post.findByIdAndDelete(id);
        return 'Post deleted!';
      } catch (err) {
        throw err;
      }
    },
    updatePost: async (_, { id, input }) => {
      try {
        const post = await Post.findByIdAndUpdate(id, input, { new: true });
        return post;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default resolvers;
