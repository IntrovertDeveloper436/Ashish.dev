import mongoose from 'mongoose';

export const connectDB = async (mongoUri) => {
  if (!mongoUri) {
    throw new Error('MONGODB_URI environment variable is not set');
  }
  const connectionDB = await mongoose.connect(mongoUri);
  console.log(`Mongo connected DB host : ${connectionDB.connection.host}`);
};