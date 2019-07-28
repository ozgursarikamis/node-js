var net = require("net");
var client = new net.Socket();

client.connect(7000, "127.0.0.1");

client.on("data", data => {
    console.log("DatA:", data);
    client.destroy();    
});

client.on("close", () => {
    console.log("Connection Closed");    
});