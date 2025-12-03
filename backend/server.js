import express from 'express';
import { connection } from "./db.js";

let app = express();

//import connection from db.js


app.listen(3000,async()=>{
    try{
        await connection
        console.log("connected to mongodb")
    }catch(err){
        console.log(err)
    }
    console.log('Server running on port 3000');
});