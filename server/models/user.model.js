import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
unique:true,
    },
        email:{
            type:String,
            required:true,
    unique:true,
        },  
        password:{
            type:String,
            required:true,
        },
        profilePicture:{
            type:String,
            default:'https://th.bing.com/th/id/OIP.RujLgT4Jc2TsMFvIY8t5iQHaHa?pid=ImgDet&rs=1',
        },
},{timestamps:true});

const User= mongoose.model('User',userSchema); // create the model

export default User;