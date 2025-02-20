const express=require("express");
const app=express();
const port =8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
let posts=[
    {
        username:"Aman jha",
        content:"I love coding",
        id:Date.now()
    },
    {
        username:"Sona jha",
        content:"I love coding too",
        id:Date.now()
    },
    {
        username:"Abhinav jha",
        content:"I don't like coding that much",
        id:Date.now()
    },
];

app.get("/posts",(req,res)=>{
    res.render("Homepage.ejs",{posts});
});


app.get("/posts/new",(req,res)=>{
res.render("form.ejs");
});
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
});


app.get("/posts/:id/edit",(req,res)=>{
    let {content}=req.body;
    req.render("edit.ejs");
    posts.push({content});
    res.redirect("/posts");
});
app.listen(port,()=>{
    console.log("Listening to port 8080");
});