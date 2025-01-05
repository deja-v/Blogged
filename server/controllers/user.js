import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
async function handleUserRegister(req,res) {
    try {
        const {name, email, password} = req.body;
        const result = await User.create({name, email, password});
        res.status(201).json({msg:"user created successfully",result});
    } catch (error) {
        console.log("error creating user",error);
        res.status(500).json({msg:"error creating user"});
    }   
}

async function handleUserLogin(req,res) {
    try {
        const {email,password} = req.body
        const entry = await User.findOne({
            email,
            password
        })
        if(!entry) return res.json({"status":"error", "user":false});
        const token = jwt.sign({
            entry
        }, process.env.SECRET_KEY)
        // res.cookie("user",token);
        // res.cookie('jwt', token, { httpOnly: true, secure: false });
        return res.status(200).json({"status":"ok", "user":token});
    } catch (error) {
        console.log("error logging in");
        res.send("error logging in")
    }
}

export {handleUserRegister, handleUserLogin};