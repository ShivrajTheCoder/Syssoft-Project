const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const roomSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    floor:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("rooms",roomSchema);