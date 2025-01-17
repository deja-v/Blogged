import express from 'express';
import { handleCreatePost,handleUserPosts,handlePostDelete } from '../controllers/post.js';
// import multer from 'multer';



// const upload = multer({ dest: "uploads/" });
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "Blogged_images", // Folder name in Cloudinary
//         allowed_formats: ["jpeg", "png", "jpg"],
//     },
// });

// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";

// cloudinary.config({
//     cloud_name: `${process.env.CLOUD_NAME}`,
//     api_key: `${process.env.API_KEY}`,
//     api_secret: `${process.env.API_SECRET}`,
// });

// // Configure Cloudinary storage for Multer
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "Blogged_images", // Folder in Cloudinary
//     allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
//   },
// });

// const upload = multer({ storage });


// const upload = multer({ storage: storage });


const router = express.Router();

router.get('/myposts', (req,res)=>{
    handleUserPosts(req,res);
});

router.delete('/delete', (req,res)=>{
    handlePostDelete(req,res);
});

router.post('/', (req, res) => {
    console.log("here i am")
    handleCreatePost(req, res);
});

export default router;