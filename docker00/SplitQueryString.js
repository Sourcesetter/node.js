// Ausprobieren der Auswertung einer URL
// Teilt URL-String in Teile 
// Aufruf mit http://0.0.0.0:8123/?year=2018&month=Feb

var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q. month;
    res.end(txt);
}).listen(8123, "0.0.0.0");
// Port im docker run Kommando gesetzt
console.log('Server running, try http://0.0.0.0:<port>/?year=2018&month=Feb');
