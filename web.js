var express = require('express');
var fs = require('fs'); 
var app = express.createServer(express.logger());
//var fs=require('fs');
//var htmlfile="index.html";


app.get('/', function(request, response) {

fs.readFile('/index.html','utf8',function(err,data) {

if (err) { return response.send(err); }
response.send(data);
});


/*
var html=fs.readFileSync(htmlfile).toString();

//if (err) { response.send ('error thrown!'); }
response.send(html); 
//fs.readFile('/index.html','utf-8',function (err,data) {
//if (err) { throw err; }

//var filedata=data.toString()
//response.send(data);
//});
//  response.send('Hello World2!');

*/

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
