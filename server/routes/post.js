import express from "express";
import {
  handleCreatePost,
  handleUserPosts,
  handlePostDelete,
} from "../controllers/post.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.get("/myposts", (req, res) => {
  handleUserPosts(req, res);
});

router.delete("/delete", (req, res) => {
  handlePostDelete(req, res);
});

router.post("/create", upload.single("image"), (req, res) => {
  handleCreatePost(req, res);
});

export default router;
