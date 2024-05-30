import Express from "express";
import SIGN from "../Model/signupmodel.js";
import jwt  from "jsonwebtoken";
let key="Secret_Key"

let signRouter=Express.Router()

// http://localhost:8080/user/login
signRouter.post('/login',async(req,resp)=>{
    let {email,password}=req.body
    let newpassword
    let user=await SIGN.findOne({email:email})
    if(user && user.password!="xxxx")
    {
        jwt.verify(user.password,key,(err,data)=>{
            if(err) throw err
            newpassword=data
        })
        console.log(password,email)
        let nuser=await SIGN.findOne({email:email})
        if(nuser && password===newpassword)
        {
            return resp.send({"msg":1})
        }
        else
        {
            return resp.send({"msg":0})
        }
    }
    else if(user && user.password==="xxxx")
    {
        return resp.send({"msg":3})
    }
    else
    {
        return resp.send({"msg":-1})
    }
})

// http://localhost:8080/user/register
signRouter.post('/register',async(req,resp)=>{
    let {name,email,password}=req.body
    let user=await SIGN.findOne({email:email})
    if(user)
    {
        if(user && user.password==="xxxx")
        {
            return resp.send({"msg":"Email already registered with google,plz sign with google"})
        }
        else
        {
            return resp.send({"msg":"Email already exist"})
        }
    }
    jwt.sign(password,key,(err,data)=>{
        let password=data
        let newuser=new SIGN({name,email,password})
        newuser.save()
        resp.send({"msg":"Signup done"})
    })
})

// http://localhost:8080/user/google-login
signRouter.post('/google-login', async (req, res) => {
    let { email, name, googleid } = req.body;
    let user = await SIGN.findOne({ email: email })
    if (user) {
        return res.send({ "msg": "Login success", user })
    } else {
        let newUser = new SIGN({ name, email, googleid })
        await newUser.save()
        return res.send({ "msg": "User registered successfully", newUser })
    }
})

export default signRouter