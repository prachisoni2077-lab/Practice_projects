const express = require("express");
const app = express();

 const path = require("path");

// const method = require("method-override");

app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
// app.use(method("_method"));

// -------------------- ROUTES --------------------
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "ht.html"));
});

// -------------------- SERVER --------------------
app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});
app.get("/home/again",(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "h2.html"))
})

app.get("/home/again/firse",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","h3.html"))
})
app.get("/home/again/firse/firse2",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","h4.html"))
})
app.get("/home/again/firse/firse2/final",(req,res)=>{
     res.sendFile(path.join(__dirname,"public","h5.html")) 
})