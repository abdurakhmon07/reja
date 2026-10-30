console.log("web serverni boshlash");

const express = require("express");
const app = express();
const fs = require("fs");

//Mongodb chaqirish
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err,data) => {
    if (err) {
        console.log("ERROR:", err);
    } else{
        user = JSON.parse(data);
    }
});

app.use(express.static("public"));
app.use(express.json());   
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (req,res) => {

});
app.get("/author", (req, res) => {
    res.render("author", {user: user});
});

app.get("/",function (req,res){
    res.render("reja");
});                   

module.exports = app;
