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
    .then(function(){
        console.log("add");
        res.status(200).send("All good");
    })
    .catch(function(err){
        console.log(err);
        res.status(404).send("Oh uh, something went wrong");
    });
});

router.post("/del",function(req,res){
    Itdtdpn.findByIdAndDelete(req.body.delid,function(err,result){
        if(result){
            console.log("del");
            res.status(200).send("All good");
        }
        else{
            console.log(err);
            res.status(404).send("Oh uh, something went wrong");
        }
    });
})

router.get("/cout",function(req,res){   
    Itdtdpn.find(function(err,result){
        if(result){
            res.send(result);
            console.log("cout");
            res.status(200).send("All good");
        }
        else{
            console.log(err);
            res.status(404).send("Oh uh, something went wrong");
        }
    })
});

router.get("/",function(req,res){ 
    res.send("<h1>Blog Backend</h1><a href=''>Go to Blog Frontend</a>")
});

export default router;
