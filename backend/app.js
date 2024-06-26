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
app.get('/',(req,resp)=>{
    resp.send("hello")
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("err")
})

app.listen(process.env.PORT,(err)=>{
    if(err) throw err
    console.log(`server is running on port:${process.env.PORT}`)
})
