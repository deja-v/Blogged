import express from 'express';
import { handleCreatePost } from '../controllers/post.js';
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



router.post('/',upload.single("image"), (req, res) => {
    
    handleCreatePost(req, res);
});

export default router;