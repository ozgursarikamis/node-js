const { spawn } = require("child_process");

// The result of executing the spawn function (the child object above) is a ChildProcess instance, 
// which implements the EventEmitter API. 
// This means we can register handlers for events on this child object directly

// const child = spawn("cmd");

// child.on("exit", (code, signal) => {
//     console.log(
//         "child process exited with " + `code ${code} and signal ${signal}`
//     );
// });

const progs = {
    list: "dir",
    copy: "cp",
    folder: "mkdir"
};

const child = spawn(progs.list);
child.stdout.on("data", data => {
    console.log('data :', data);
});