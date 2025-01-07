import 'dotenv/config'
import express from "express"
import connectDB from "./connection.js";
import cors from 'cors';
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import auth from './middlewares/auth.js';
import { Post } from './models/post.model.js';
import { User } from './models/user.model.js';
const app = express();
const port = process.env.PORT || 3000;

connectDB();

const allowedOrigins = [
    'http://localhost:5173', 
  ];
  
app.use(
cors({
    origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
    },
    methods: 'GET,POST,PUT,DELETE', 
})
);

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log("error fetching posts", error);
    res.status(500).json({ msg: "error fetching posts" });
  }
});
app.get("/:id", async (req, res) => {
  try {
    
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    console.log("error fetching post", error);
    res.status(500).json({ msg: "error fetching post" });
  }
});

app.use("/user", userRouter);
app.use("/",auth, postRouter);



app.listen(port, () => {
  console.log("Server is running on port " + port);
});