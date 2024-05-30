import mongoose from "mongoose";

let schema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        default:"xxxx"
    },
    googleid:{
        type:String,
        require:true,
        default:"xxxx"
    }
})
let SIGN=mongoose.model("sign",schema)
export default SIGN