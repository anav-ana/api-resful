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


app.get('/:id', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function (err, data){
        if(err) throw err;
        //variable user will containthe result of users informations to retrieve all ressource
        let users = JSON.parse(data);
        //variable user will retrieve user information by id
        let user = users["user"+ req.params.id]
        //display user information by id
        console.log("user info by id: " + JSON.stringify(user));
        res.send(JSON.stringify(user));
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


app.delete('/deleteUser', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function (err, data){
        data = JSON.parse(data);
        delete data["user" + 2];
        //display in log data of
        console.log("delete user" + JSON.stringify(data));
        res.send(JSON.stringify(data));
    });
})


let server = app.listen(8081, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Launch API resful with the following URI htpp://%s:%s", host, port)
})