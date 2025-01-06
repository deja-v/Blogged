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

        const response = await Post.create({
            title,
            heading,
            body,
            userName: entry.name,
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