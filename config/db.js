import mongoose from 'mongoose';
import config from './envs.js';

const connectDatabase = async () => {
  await mongoose
    .connect(config.mongo_url, {
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('✅ Connected to database');
    })
    .catch((err) => {
      console.log('❌ Error connecting to database', err);
      process.exit(1);
    });
};

export default connectDatabase;
