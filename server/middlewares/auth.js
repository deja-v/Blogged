import jwt from "jsonwebtoken";

async function auth(req,res,next) {
    try {
        console.log(req.body);
        const token = req.headers.authorization.split(" ")[1];
        if(!token) return res.status(401).json({msg:"token not found"});
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) return res.status(401).json({msg:"invalid or expired token"});
        console.log("success \n");
        
        req.user = decoded.entry;
        next();
    } catch (error) {
        console.log("error authenticating user",error);
        res.status(500).json({msg:"error authenticating user"});
        
    }
}

export default auth;