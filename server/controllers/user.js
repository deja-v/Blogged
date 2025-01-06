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
        const name = entry.name;
        if(!entry) return res.status(401).json({"status":"error", "user":false});
        const token = jwt.sign({
            entry
        }, process.env.SECRET_KEY)
        return res.status(200).json({"status":"ok","name":name, "user":token});
    } catch (error) {
        console.log("error logging in");
        res.status(400).json({"status":"error logging in","user":false})
    }
}

export {handleUserRegister, handleUserLogin};