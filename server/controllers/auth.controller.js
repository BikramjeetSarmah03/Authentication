import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup= async(req,res,next) =>{
const{username,email,password}=req.body;
const hashPassword= bcryptjs.hashSync(password,12);
const newUser=new User({username,email,password:hashPassword}); // in es6, if key and value are same,we can use once by removing another.

try {
    await newUser.save();
    res.status(200).json({message:"User created successfully"});
    
} catch (error) {
next(error);
}
}