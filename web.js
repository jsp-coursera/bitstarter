var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
/*
fs.readFileSync('/index.html', function (err, dat$|    at Interface.<anonymous> (repl.js:239:12)
  if (err) throw err;             |    at Interface.EventEmitter.emit (events.js:$
  var buffer = new Buffer(20);
  buffer.write ("Hello", "utf-8")    |    at Interface._onLine (readline.js:202:10)
}); 
*/


fs = require('fs')
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  response.send(data);
// console.log(data);

});








//var buffer = new Buffer(20);
//buffer.write("hello","utf-8");
    
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});
*/
