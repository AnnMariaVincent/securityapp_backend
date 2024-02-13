const express=require("express")
const securitymodel =require("../model/adminmodel")
const bcrypt=require("bcrypt")


const router=express.Router()


router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let security=new securitymodel(data)
    let response=await security.save()
    res.json({
        status:"Success"
    })
    

})

router.get("/view",async(req,res)=>{
    let data=await securitymodel.find()
    res.json(data)
})
router.post("/signin",async(req,res)=>{
    let input=req.body
    let emailid=req.body.emailid
    let data=await securitymodel.findOne({"emailid":emailid})
    if(!data){
        return res.json(
            {
                status:"invalid emailid"
            }
        )
    }
    console.log(data)
    let dbpassword=data.pass
    let inputpassword=req.body.pass
    console.log(dbpassword)
    console.log(inputpassword)
    //const match=await bcrypt.//compare(inputpassword,dbpassword)
    if(!(dbpassword==inputpassword))
    {
     return res.json(
        {
            status:"Incorrect"
        }
    )
    }
    else{
    res.json(
        {
            status:"Success","userdata":data
        }
    )
    }
    
    
    })
    
module.exports=router