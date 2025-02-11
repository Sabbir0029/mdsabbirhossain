import mongoose, { Schema } from "mongoose";
import { TypeOfBlog } from "./Blog.interface";

const blogSchema = new Schema<TypeOfBlog>(
  {
    id: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: [true, "imageUrl is required"],
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "category is required"],
      trim: true,
    },
    shotdescriptions: {
      type: String,
      required: [true, "shot descriptions is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "content is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// export the Mongoose model
export const Blog = mongoose.model<TypeOfBlog>("Blog", blogSchema);
