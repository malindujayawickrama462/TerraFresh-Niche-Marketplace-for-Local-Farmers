import { Product } from "../model/productModel.js";
import {v4 as uuidv4} from "uuid";

export const addProduct = async(req,res)=>{
    try{
        const{name,description,price,quantity,unit,category,location,images,} = req.body;
        const product= await Product.create({
            productId:uuidv4(),
            name,
            description,
            price,
            quantity,
            unit,
            category,
            location,
            images,
            farmer:req.user._id,
        });
        res.status(201).json(product);
    }catch(err){
        res.status(400).json({
            message:err.message
        });
    }
};