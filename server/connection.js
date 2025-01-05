import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/Blogged`);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("error connecting to MongoDB", error);
    }
}
export default connectDB;