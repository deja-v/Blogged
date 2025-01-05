import 'dotenv/config'
import express from "express"
import connectDB from "./connection.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log("Server is running on port " + port);
});