const express=require("express");
const path=require("path");
var bookrouter=require("./Routes/bookrouter");
var authrouter=require("./Routes/authorrouter");
var userrouter=require("./Routes/userrouter");

const app=express();

app.use("/books",bookrouter);
app.use("/authors",authrouter);
app.use("/users",userrouter);

app.use(express.static(path.join(__dirname,"/public")));

app.set("views","./src/view");
app.set("view engine","ejs");
app.listen("8080",function(req,res){
    console.log("Server Started Listening...")
})

app.get("/index",function(req,res){
    res.render('index',{pageTitle:"Library",nav:[{link:'/books',title:'Books'},{link:'/authors',title:"Authors"},{link:'/addbook',title:"Add Book"}]});
})

app.get("/",function(req,res){
    res.render('login',{pageTitle:"Library",nav:[{link:'/books',title:'Books'},{link:'/authors',title:"Authors"},{link:'/addbook',title:"Add Book"}]});
})


app.get("/signup",function(req,res){
    res.render('signup',{pageTitle:"Library",nav:[{link:'/books',title:'Books'},{link:'/authors',title:"Authors"},{link:'/addbook',title:"Add Book"}]});
})