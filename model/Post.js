import mongoose from "mongoose";
export const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      max: 150,
      required: true,
    },
    desc: {
      type: String,
      max: 2500,
      required: true,
    },
    targetAmount: {
      type: Number,
      required: true,
      timestamps: true,
    },
    fundRaised: {
      type: Number,
      required: true,
      timestamps: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("post", postsSchema);
