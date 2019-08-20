var express=require("express");
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var url="mongodb://locahost/librarydb";
var user=require("../model/usermodel");

const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err){
    if (err) throw err;
    else{
        console.log("Database Connected..");
    }
})

router.post("/newuser",function(req,res){
    var u1=new user;
    u1.fname=req.body.fname;
    u1.uname=req.body.uname;
    u1.pswd=req.body.pswd;
    u1.role=req.body.role;
    u1.save(function(err){
        if(err) throw err;
        else{
            console.log("User Registered...");
            res.redirect('/');
        }
    })
})
router.post("/login",function(req,res){
    var username=req.body.uname;
    var userpwd=req.body.upwd;

    user.find({uname:username,pswd:userpwd},function(err,result){
      if(err) throw err;
      else{
         if(result.length!=0)
            res.redirect('/index');
        else{
            // res.send( "<script> alert(' Invalid UserName or Password') </script> ")
            res.redirect('/');
        }
      }  
    })
    
})
module.exports=router;