let express = require('express');
let app = express();


app.get("/", getIndex) 

//first challenge
function getHandler(req, res){
    res.send("Hello Express");
}
//second challenge
function getIndex(req,res){
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath)
}

//thirth challenge
publicPath = __dirname + '/public';
app.use("/public",express.static(publicPath));































 module.exports = app;
