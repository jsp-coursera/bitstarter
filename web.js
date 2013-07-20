var express = require('express');
var app = express.createServer(express.logger());
var fs=require('fs');
var htmlfile="/index.html";
app.get('/', function(request, response) {

//var html=fs.readFileSync(htmlfile).toString();

//if (err) { response.send ('error thrown!'); }
//response.send(html); 
fs.writeFileSync('index.html',function (err,data) {
if(err) throw err;
response.send(data);
});
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
