import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send("I am backend of UpKeep!!!")
})

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Backend running on http://localhost:${PORT}`);
})