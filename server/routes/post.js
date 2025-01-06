import express from 'express';
import { handleCreatePost } from '../controllers/post.js';

const router = express.Router();

router.post('/', (req, res) => {
    handleCreatePost(req, res);
});

export default router;