var mongoose=require("mongoose");
var schema=mongoose.Schema; //instance created

var authorschema=new Schema(
    {
        authorid:{type:String,required:true},
        authorname:{type:String,required:true},
        authorcountry:{type:String,required:true}
    }
)

var authormodel=mongoose.model("authormodel",empschema,"author")