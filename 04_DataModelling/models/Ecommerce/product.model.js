import mongoose from"mongoose";
const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",// Reference to Category model
        required: true,
    },
    stock: {
        type: Number,
        // required: true,
        default: 0,
    },
    images: [{
        type: String,
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User", // Reference to User model
        required: true,   
    }

    


},{timestamps:true});

export const Product=mongoose.model("Product",productSchema);