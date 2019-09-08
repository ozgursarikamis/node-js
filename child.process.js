// There are four different ways to create a child process 
// in Node: spawn(), fork(), exec(), and execFile().

// ============================================================= //

// The spawn function launches a command in a new process 
// and we can use it to pass that command any arguments. 

const { fork } = require('child_process');

const n = fork(`${__dirname}/child.process.child.js`);

n.on("message", m => {
    console.log("PARENT got message: ", m);    
});
// Causes the child to print: CHILD got message: { hello: 'world' }
n.send({ hello: 'world' });