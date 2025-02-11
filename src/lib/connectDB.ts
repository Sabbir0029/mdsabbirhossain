import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined in environment variables");
}

export const connectDB = async (): Promise<typeof mongoose> => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose;
    }

    return await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
