var http = require('http');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});
var port = 10808;

var currentClients = 0;

wss.on('connection', function(ws) {
	currentClients++;
	ws.on('close', function() {
		currentClients--;
	});

});

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.write('{"count":'+currentClients+'}');
	res.end();
});

server.listen(port, function() {
	console.log('server listening on port ' + port);
});
