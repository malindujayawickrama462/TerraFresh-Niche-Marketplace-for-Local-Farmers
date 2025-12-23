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
export const getyMyProducts = async(req,res)=>{
    try{
        const products = await Product.find({
            farmer:req.user._id
        });
        res.status(200).json(products);
        }catch(err){
            res.status(500).json({
                message:err.message
            });
        }
};
export const getSingleproduct = async(req,res)=>{
    try{
        const product = await Product.findOne9({
            _id:req.params.id,
            farmer:req.user._id,
        });
        if(!product){
            return res.status(404).json({
                message:"product not found or not authorized",
            });
        }
        res.status(201).json(product);
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};


