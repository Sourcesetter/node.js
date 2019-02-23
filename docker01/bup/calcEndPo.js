// Bereitstellen eines Endpoints der Berechnungen mit Interger durchführt.
// http://0.0.0.0:8345/add?a=1&b=3   addiert 1 + 3
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write("Die uebergebene URL lautet: ");
    // res.write(req.url);
    // res.write("\n");
	var q = url.parse(req.url, true).query;
	var path = url.parse(req.url, true).pathname;

    // var txtu = "path: " + path + "\n";
    // res.write(txtu);
	var a = parseFloat(q.a);
	var b = parseFloat(q.b);

	if ( path.toString() === "/add" ){
		var out = a + b;
    	var txtq = "Result: " + a + "+" + b + "=" + out + "\n";
		return res.end(txtq);
	} else if ( path.toString() === "/sub"){
		var out = a - b;
    	var txtq = "Result: " + a + "-" + b + "=" + out + "\n";
		return res.end(txtq);
	} else if ( path.toString() === "/div"){
		var out = a / b;
    	var txtq = "Result: " + a + "/" + b + "=" + out + "\n";
		return res.end(txtq);
	} else if ( path.toString() === "/mul"){
		var out = a * b;
    	var txtq = "Result: " + a + "*" + b + "=" + out + "\n";
		return res.end(txtq);
	} else{
		return res.end("unknown endpoint");
	}

    res.end();
}).listen(8345, "0.0.0.0");
console.log('Server running, try http://0.0.0.0:<port>/add?a=1&b=2');
