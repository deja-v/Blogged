import { Schema,model } from "mongoose";
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    heading:{
        type: String,
        required: true,
    },
    body: {
      type: String,
      required: true,
    },
    userName:{
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    createdOn: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model("Post", postSchema);


