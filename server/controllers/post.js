import { Post } from "../models/post.model.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";





async function handleCreatePost(req, res) {
    try {
        const { title, heading, body } = req.body;
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
<<<<<<< HEAD
        // // const results = await uploadToCloudinary(req.file.path, "Blogged_images");
        // console.log(results);
        const image = req.file ? req.file.path : null; // Cloudinary URL
        if (!image) {
          console.log("image upload failed")
        }
=======
        const results = await uploadToCloudinary(req.file.path, "Blogged_images");
        console.log(results.url);
>>>>>>> f70e67f47596fa2987199c200cd3b19604f7579d
        const response = await Post.create({
            title,
            heading,
            body,
            userName: entry.name,
            image: req.file.path,
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

async function handleUserPosts(req,res) {
    try {
        const user = req.user;
        const entries = await Post.find({userName:user.name})
        console.log(user)
        res.status(200).json({msg: "success",data:entries})
    } catch (error) {
        console.log("error fetching posts ", error);
        res.status(500).json({ msg: "error fetching posts" });
    }
    
}

async function handlePostDelete(req,res) {
    try {
        const {postId} = req.body
        console.log(postId)
        const entry = await Post.deleteOne({_id:postId})
        console.log({ msg: "post deleted successfully" });
         
        res.status(200).json({ msg: "post deleted successfully" });
    } catch (error) {
        console.log("error deleting post ", error);
        res.status(500).json({ msg: "error deleting post" });
    }
}

export { handleCreatePost, handleUserPosts, handlePostDelete };
