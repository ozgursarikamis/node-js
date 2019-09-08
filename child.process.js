// There are four different ways to create a child process 
// in Node: spawn(), fork(), exec(), and execFile().

// ============================================================= //

// The spawn function launches a command in a new process 
// and we can use it to pass that command any arguments. 

const { spawn } = require('child_process');
spawn('git', ['log']).stdout.pipe(process.stdout); 
// 1st argument: executable file path 
// 2nd argument: arguments
