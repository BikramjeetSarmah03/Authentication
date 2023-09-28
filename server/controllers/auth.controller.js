import { errorHandler } from "../lib/errorhandler.js";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const signin= async(req,res,next) =>{
    const{email,password}=req.body;

    try {
     const validUser= await User.findOne({email});
     if(!validUser) return next(errorHandler(404, 'User not found'));
     const validPassword=bcryptjs.compareSync(password, validUser.password);
     if(!validPassword) return next(errorHandler(401, 'Invalid password!'));
     const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
     res.cookie('access_token', token, {httpOnly:true}).status(200).json(validUser);
    }catch (error) {
    next(error);
    }
}
