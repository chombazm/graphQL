import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import connectDatabase from './config/db.js';
import typeDefs from './typeDefs/index.js';
import resolvers from './resolvers/index.js';

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  app.use((req, res, next) => {
    res.send('Accessing express REST API');
  });
  await connectDatabase();
  app.listen({ port: 4000 }, () => {
    console.warn(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
  });
}
startServer();
