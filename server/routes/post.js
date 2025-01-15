import express from 'express';
import { handleCreatePost,handleUserPosts,handlePostDelete } from '../controllers/post.js';
import multer from 'multer';

const upload = multer({ dest: "uploads/" });
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "Blogged_images", // Folder name in Cloudinary
//         allowed_formats: ["jpeg", "png", "jpg"],
//     },
// });



// const upload = multer({ storage: storage });


const router = express.Router();

router.get('/myposts', (req,res)=>{
    handleUserPosts(req,res);
});

router.delete('/delete', (req,res)=>{
    handlePostDelete(req,res);
});

router.post('/',upload.single("image"), (req, res) => {
    
    handleCreatePost(req, res);
});

export default router;