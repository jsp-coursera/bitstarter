var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {

fs.readFileSync('./index.html','utf-8',function(err,data) {
if (err) { response.send ('error thrown!'); }
response.send(data); 
}
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
