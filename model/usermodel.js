var mongoose=require("mongoose");
var schema=mongoose.Schema;//instance created

var userschema=new schema(
    {
        fname:{type:String,required:true},
        uname:{type:String,required:true},
        pswd:{type:String,required:true},
        role:{type:String,required:true}
    }
)

var usermodel=mongoose.model("usermodel",userschema,"user");
module.exports=usermodel;