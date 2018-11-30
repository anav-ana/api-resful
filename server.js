var express = require('express');
var app = express();
var fs = require("fs");

let user ={
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    },
} 
/*
*
*method > listUsers
*
*/

app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function (err, data){
        console.log(data);
        res.send(data);
    });
})

/*
*
*method > addUsers
*methode > 

*/
app.post('/addUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function (err, data){
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.send(JSON.stringify(data));
    });
})



let server = app.listen(8081, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Launch API resful with the following URI htpp://%s:%s", host, port)
})