const mongoose=require("mongoose")

const addsecuritySchema=new mongoose.Schema(
    {
       name:String,
       empid:String,
       address:String,
       phno:String,
       emailid:String,
       pass:String,
    
    }
)

module.exports=mongoose.model("addsecurity",addsecuritySchema)