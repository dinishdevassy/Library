var mongoose=require("mongoose");
var Schema=mongoose.Schema; //instance created

var bookschema=new Schema(
    {
        name:{type:String,required:true},
        category:{type:String,required:true},
        image:{type:String,required:true},
        price:{type:String,required:true},
        Author:{type:String,required:true}
    }
)

var bookmodel=mongoose.model("bookmodel",bookschema,"books");
module.exports=bookmodel;

