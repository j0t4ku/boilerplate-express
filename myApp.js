let express = require('express');
let app = express();


app.get("/", getIndex) 

function getHandler(req, res){
    res.send("Hello Express");
}

function getIndex(req,res){
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath)
}



































 module.exports = app;
