import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  mongo_url: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/graphql-test',
};

export default config;
