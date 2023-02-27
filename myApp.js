let express = require('express');
require('dotenv').config()
let app = express();

//eighth challenge 
app.get("/:word/echo", getEcho)
function getEcho(req,res){
    res.send({echo:req.params.word})
}


//seventh challenge
app.get("/now",nowMiddleware,getNow);

function nowMiddleware(req,res,next){
    req.time= new Date().toString()
    next()
}
function getNow(req,res){
    res.send({time: req.time})
}

// Sixth challenge
app.use(rootMiddleware);
function rootMiddleware(req, res, next){
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
}

//first challenge
app.get("/", getIndex) 

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

//forth and five challenge
app.get("/json",getJson);

function getJson(req,res){
    if(process.env.MESSAGE_STYLE==="uppercase"){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
}
































 module.exports = app;
