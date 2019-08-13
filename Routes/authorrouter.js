var express=require("express");
var router=express.Router();

var authorarray=
[
    {
        name:"jk Rowling",
        dob: 1965 ,
        //image:"https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/EW_Harry-Potter_Featured.jpg?itok=XphMvnG2",
        country:"Brittan",
        book:"Harry Potter"
    },
    {
        name:"Sachin ",
        dob: 1973 ,
        //image:"https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/EW_Harry-Potter_Featured.jpg?itok=XphMvnG2",
        country:"India",
        book:""
    },
]


router.get("/",function(req,res){
    res.render('authors',{pageTitle:"Library",nav:[{link:'/books',title:'Books'},{link:'/authors',title:"Authors"}],authordetail:authorarray});
})

module.exports=router;