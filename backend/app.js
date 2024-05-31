import Express  from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import signRouter from "./Router/signRouter.js";
let app=Express()
app.use(cors())
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use('/user',signRouter)

mongoose.connect("mongodb://localhost:27017/assesment").then(()=>{
    console.log("running")
}).catch(()=>{
    console.log("err")
})

app.listen(8020,(err)=>{
    if(err) throw err
    console.log("server is connected")
})
