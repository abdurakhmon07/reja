console.log("web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/hello", function(req, res) {
    res.end("<h1>HEllO WORLD</h1>");
});
app.get("/gift", function(req, res) {
    res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
});

const server = http.createServer(app);

let PORT = 3000;

server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});