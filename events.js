const events = require("events");
const emitter = new events.EventEmitter();
emitter.on("customEvent", (message, user) => {
    console.log({message, user});
});

// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That's pretty cool ha?", "Alex");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye from process", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});