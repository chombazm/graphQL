import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  app.use((req, res, next) => {
    res.send('Hello world!');
  });
  app.listen({ port: 4000 }, () => {
    console.warn(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
  });
}
startServer();
