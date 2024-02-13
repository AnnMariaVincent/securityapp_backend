const express=require("express")
const visitormodel =require("../model/visitormodel")


const router=express.Router()


router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let visitor=new visitormodel(data)
    let response=await visitor.save()
    res.json({
        status:"Success"
    })
    

})
    
module.exports=router