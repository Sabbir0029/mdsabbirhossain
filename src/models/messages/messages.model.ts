import mongoose, { Schema } from 'mongoose';
import { TypeOfMessages } from './messages.interface';

// Define the schema for the stationery product
const messageSchema = new Schema<TypeOfMessages>(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
      maxlength: [30, 'name is max length 30 characters '],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      trim: true,
    },
    messages: {
      type: String,
      required: [true, 'email is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);



// export the Mongoose model
export const Message = mongoose.model<TypeOfMessages>('Message', messageSchema);