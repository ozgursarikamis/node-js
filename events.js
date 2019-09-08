const events = require("events");
const emitter = new events.EventEmitter();
emitter.on("customEvent", (message, user) => {
    console.log({message, user});
});

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool ha?", "Alex");