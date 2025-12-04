import jwt from "jsonwebtoken";

export const auth  = (req,res,next)=>{
    const token = req.header.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message:"Access denied No token provided"
        });
    }
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;//attach user data(id,role)
        next();
    }catch(err){
        res.status(400).json({
            message:"invalid token"
        });
    }
};