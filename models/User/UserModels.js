const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        minlength:5
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})

module.exports=mongoose.model("user",userSchema);