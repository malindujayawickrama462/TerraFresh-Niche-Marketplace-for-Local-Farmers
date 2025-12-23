import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    unit:{
        type:String,
        enum:["kg","bunch","pack"],
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    images:[
        {
            type:String,
        },
    ],
    farmer:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
},
    {timestamps:true}
);

export const Product = mongoose.model("Product",productSchema);