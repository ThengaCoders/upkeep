import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import { errorHandler } from "./middlewares/errorHandler.js";
dotenv.config();

const app=express();

app.use(express.json());
app.use(cors());

app.use("api/auth",authRoutes);

app.get('/',(req,res)=>{
    res.send("I am backend of UpKeep!!!")
})

app.use(errorHandler);

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Backend running on http://localhost:${PORT}`);
})