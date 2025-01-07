import { Post } from "../models/post.model.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: `${process.env.CLOUD_NAME}`,
    api_key: `${process.env.API_KEY}`,
    api_secret: `${process.env.API_SECRET}`,
});

const uploadToCloudinary = async (path, folder = "Blogged_images") => {
    try {
      const data = await cloudinary.uploader.upload(path, { folder: folder });
      return { url: data.secure_url, publicId: data.public_id };
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

async function handleCreatePost(req, res) {
    try {
        const { title, heading, body, image } = req.body;
        console.log(req.body)
        const createdBy = req.user._id;
        const entry = await User.findById(createdBy);
        if (!entry) {
            return res.status(404).json({ msg: "user not found" });
        }
        // let imageData = {}
        // if(image){
        //     const results = await uploadToCloudinary(image, "my-profile")
        //     imageData = results
        // }
        console.log(req.file);
        
        const results = await uploadToCloudinary(req.file.path, "Blogged_images");
        const response = await Post.create({
            title,
            heading,
            body,
            userName: entry.name,
            image: results.url,
            createdBy,
            createdOn: new Date()
        })
        console.log("post created successfully");
        res.status(201).json({ msg: "post created successfully", response });
    } catch (error) {
        console.log("error creating post ", error);
        res.status(500).json({ msg: "error creating post" });
    }
}

export { handleCreatePost };