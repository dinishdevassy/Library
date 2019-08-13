const express=require("express");
const path=require("path");
var bookrouter=require("./Routes/bookrouter");
var authrouter=require("./Routes/authorrouter");

const app=express();

app.use("/books",bookrouter);
app.use("/authors",authrouter);

app.use(express.static(path.join(__dirname,"/public")));

app.set("views","./src/view");
app.set("view engine","ejs");
app.listen("8080",function(req,res){
    console.log("Server Started Listening...")
})

app.get("/",function(req,res){
    res.render('index',{pageTitle:"Library",nav:[{link:'/books',title:'Books'},{link:'/authors',title:"Authors"}]});
})


