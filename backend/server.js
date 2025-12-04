import express from 'express';
import { connection } from "./db.js";
import authRoutes from "./routes/authRoutes.js";



const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || "Something went wrong!" });
});

app.listen(3000,async()=>{
    try{
        await connection
        console.log("connected to mongodb")
    }catch(err){
        console.log(err)
    }
    console.log('Server running on port 3000');
});