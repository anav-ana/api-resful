var express = require('express');
var app = express();
var fs = require("fs");


/*
*
*method > listUsers
*
*/

app.get('/listUsers', function(req, res){
    fs.readFile(_dirname + "/" + "users.json", 'utf-8', function (err, data){
        console.log(data);
        res.send(data);
    });
})


let server = app.listen(8081, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Launch API resful with the following URI htpp://%s:%s", host, port)
})