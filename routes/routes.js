import express from "express";
const router = express.Router();

import Itdtdpn from "../schema/Itdtdpn.js"

router.post("/add",function(req,res){
    const dd=new Date();
    const temp = new Itdtdpn({
        picture:req.body.picture,
        subject:req.body.subject,
        date:dd,
        title:req.body.title,
        content:req.body.content,
        profile:req.body.profile,
        name:req.body.name

    });

    temp.save()
    .then(function(){console.log("add");})
    .catch(function(err){console.log(err);});
});

router.post("/del",function(req,res){
    console.log(req.body);
    Itdtdpn.findByIdAndDelete(req.body.delit,function(err,result){
        if(result){
            console.log("del");
        }
        else{
            console.log(err);
        }
    });
})

router.get("/cout",function(req,res){   
    Itdtdpn.find(function(err,result){
        if(result){
            console.log("cout");
        }
        else{
            console.log(err);
        }
    })
});

export default router;