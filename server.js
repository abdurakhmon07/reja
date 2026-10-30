const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://gofurovuz08_db_user:7SZBtHCIXVuu7RzI@cluster0.jnusmmq.mongodb.net/Reja";

mongodb.connect(
    connectionString, 
    {
    useNewURLParser: true,
    useUnifiedTopology: true,
    }, (err,client)=> {
        if(err) console.log("ERROR On connection MongoDB");
        else {
            console.log("Mongodb connection success");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);

            let PORT = 3000;  
            
            server.listen(PORT, function() {
                console.log(`The server is running successfully on port: ${PORT}`, `http://localhost:${PORT}`);
            });
            }
    });
