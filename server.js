var express = require('express');
var app = express();
var fs = require("fs");
const normalizePort = require('normalize-port');
 
const port = normalizePort(process.env.PORT || '3002');

app.get('/list-users', function (req, res) {
   fs.readFile( __dirname + "/bd/users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/bd/users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
