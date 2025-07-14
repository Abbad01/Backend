import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to Product model
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        
    },
    price: {
        type: Number,
        required: true,
    },

    
}, { timestamps: true });

const orderScehma=new mongoose.Schema({
orderPrice: {
    type: Number,
    required: true,
},
customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true, 
},
ordertems:{
    type:[orderItemSchema],
},
address: {
    type: String,
    required: true,
},
status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
    default: "Pending", 
},
},{timestamps:true});

export const Order=mongoose.model("Order", orderScehma)