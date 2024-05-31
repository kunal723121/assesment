import Express  from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import signRouter from "./Router/signRouter.js";

dotenv.config({'path':'./.env'})
console.log(process.env.MONGO_URL)
let app=Express()
app.use(cors())
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/user',signRouter)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("running")
}).catch(()=>{
    console.log("err")
})

app.listen(10000,(err)=>{
    if(err) throw err
    console.log("server is connected")
})