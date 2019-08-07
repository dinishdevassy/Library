var express=require("express");
const router=express.Router();

var bookarray=
[
    {
        name:"Harry Potter",
        category: "Novel",
        image:"https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/EW_Harry-Potter_Featured.jpg?itok=XphMvnG2",
        price:1200,
        Author:"jk Rowling"
    },
    {
        name:"Macbeth",
        category: "Novel",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndzZKKMZ7YkI-Ds3377qf9sbFVqsmQyJc-_-5qWPUCnFX_QCzNg",
        price:800,
        Author:"Shakespeare"
    },
    {
        name:"Wings of Fire",
        category: "AutoBiography",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383464811l/18749425.jpg",
        price:1000,
        Author:"APJ Abdulkalam"
    },
    {
        name:"Adujeevitham",
        category: "Novel",
        image:"https://malayalarajyam.in/wp-content/uploads/2019/06/Aadujeevitham-malaylam-novel.jpg",
        price:500,
        Author:"Benyamin"
    },
    {
        name:"Playing it my way",
        category: "AutoBiography",
        image:"https://images-na.ssl-images-amazon.com/images/I/51FTFX%2BC3%2BL._SX323_BO1,204,203,200_.jpg",
        price:500,
        Author:"Sachin"
    } 
]

router.get("/",function(req,res){
    res.render('books',{pageTitle:"Library",nav:[{link:'/books',title:'Books'},{link:'/authors',title:"Authors"}],bookdetail:bookarray});
})

router.get("/:id",function(req,res){
   var id=req.params.id;
    console.log(id);
    console.log(bookarray[id].name);
   res.render('book1',{pageTitle:"Library",nav:[{link:'/books',title:'Books'},{link:'/authors',title:"Authors"}],
    bookdetail:bookarray[id]});
})

module.exports=router;