var express = require('express');
var app = express();
var fs = require("fs");



let server = app.listen(8081, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Launch API resful with the following URI htpp://%s:%s", host, port)
})