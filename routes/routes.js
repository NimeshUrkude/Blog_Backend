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
        res.status(200);
    })
    .catch(function(err){
        res.status(501).send('Somthing is Wrong');
        console.log(err);
    });
});

router.post("/del",function(req,res){
    Itdtdpn.findByIdAndDelete(req.body.delid,function(err,result){
        if(result){
            console.log("del");
            res.status(200);
        }
        else{
            res.status(501).send('Somthing is Wrong');
            console.log(err);
        }
    });
})

router.get("/cout",function(req,res){   
    Itdtdpn.find(function(err,result){
        if(result){
            res.status(200).send(result);
            console.log("cout");
        }
        else{
            res.status(501).send('Somthing is Wrong');
            console.log(err);
        }
    })
});

router.get("/",function(req,res){
    res.status(200).send("<h1>Blog Backend</h1><a href='https://nimeshurkude.github.io/Blog_Frontend/'>Go to Blog Frontend</a>")
});

export default router;