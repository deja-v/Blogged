import 'dotenv/config'
import express from "express"
import connectDB from "./connection.js";
import cors from 'cors';
import userRouter from "./routes/user.js";
import auth from './middlewares/auth.js';
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

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get("/",auth, (req, res) => {
    res.send("Hello World!");
});

app.use("/user", userRouter);


app.listen(port, () => {
  console.log("Server is running on port " + port);
});