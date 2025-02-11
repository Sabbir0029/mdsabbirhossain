import mongoose, { Schema } from 'mongoose';
import { TypeOfProject } from './Projects.interface';

const projectSchema = new Schema<TypeOfProject>(
  {
    imageUrl: {
      type: String,
      required: [true, 'imageUrl is required'],
      unique: true,
      trim: true,
    },
    projectName: {
      type: String,
      required: [true, 'Project Name is required'],
      trim: true,
    },
    livelink: {
      type: String,
      required: [true, 'Live link is required'],
     
    },
    githublink: {
      type: String,
      required: [true, 'Github link is required'],
     
    },
    descriptions: {
      type: String,
      required: [true, 'description is required'],
    },
    shotdescriptions: {
      type: String,
      required: [true, 'description is required'],
    },
  },
  {
    timestamps: true,
  },
);



// export the Mongoose model
export const Project = mongoose.model<TypeOfProject>('Project', projectSchema);