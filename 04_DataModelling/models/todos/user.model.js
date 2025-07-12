import mongoose from "mongoose"
import { use } from "react";
const userSchema=new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
    },
    password: {
        type: String,
        required:[true, "Password is required"],
    },
},{timestamps:true});//timestamps:true will automatically strore
// createdAt and updatedAt fields in the document.
export const User=mongoose.model("User",userSchema);