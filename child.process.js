// There are four different ways to create a child process 
// in Node: spawn(), fork(), exec(), and execFile().

// ============================================================= //

// The spawn function launches a command in a new process 
// and we can use it to pass that command any arguments. 

const { spawn } = require('child_process');

spawn('git', ['log'], {  
        stdio: 'inherit' // Will use process .stdout, .stdin, .stderr
    })
    //.stdout.pipe(process.stdout); 
// 1st argument: executable file path 
// 2nd argument: arguments

// Note that every child_process function 
// will also have a “sync” version of it (e.g. spawnSync())

// https://medium.com/the-guild/getting-to-know-nodes-child-process-module-8ed63038f3fa