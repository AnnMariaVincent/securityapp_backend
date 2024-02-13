const mongoose=require("mongoose")

const visitorSchema=new mongoose.Schema(
    {
       visitorname:String,
       purpose:String,
       phno:String,
    }
)

module.exports=mongoose.model("addvisitor",visitorSchema)