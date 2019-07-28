var net = require("net");

var server = net.createServer(socket => {
    console.log('Connection from :', socket.remoteAddress);
    socket.end("Hello World from server");    
});

server.listen(7000, "127.0.0.1");