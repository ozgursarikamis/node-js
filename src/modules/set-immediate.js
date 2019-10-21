/*
When you want to execute some piece of code asynchronously, 
but as soon as possible, one option is to use the setImmediate()
*/

// setImmediate(() => {
//     console.warn("setImmediate");
// });

let racer = () => {
    setTimeout(() => { console.log("timeout") }, 0);
    setImmediate(() => { console.log("immediate"); });
    process.nextTick(() => { console.log("nextTick"); });
    console.log("current event loop");
}

// The first one executed was process.nextTick,
// which puts its callback at the front of the event queue. 
// It will execute after the code currently being executed but
// before any I/O events or timers.

// Next is "timeout". Since we passed setTimeout a timeout of 0, 
// there's no additional enforced delay before its execution, 
// and it is placed on into the timer queue during the next loop.

// Since the check queue occurs later than the timer queue,
// setImmediate will be slower than setTimeout 0.

// racer();

let racer1 = function () {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
}

let racer2 = function () {
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
}

let racer3 = function () {
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
}

// racer1();
// racer2();
racer3();