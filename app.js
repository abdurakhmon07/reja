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

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("successfully added");
        }
    });
});
app.get("/author", (req, res) => {
    res.render("author", {user: user});
});

app.get("/", async function (req, res) {
    console.log("user entered /");
    try {
        const data = await db.collection("plans").find().toArray();
        res.render("reja", { items: data });
    } catch (err) {
        console.log(err);
        res.status(500).send("something went wrong");
    }
});
module.exports = app;
