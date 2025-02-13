import mongoose from "mongoose";

const DATABASE_MONGODB_URL = process.env.DATABASE_MONGODB_URL;

if (!DATABASE_MONGODB_URL) {
  throw new Error(
    "DATABASE_MONGODB_URL is not defined in environment variables"
  );
}

export const connectDB = async (): Promise<typeof mongoose> => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose;
    }

    return await mongoose.connect(DATABASE_MONGODB_URL);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
