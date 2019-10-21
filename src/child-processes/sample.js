const { spawn, exec } = require('child_process');

exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }
    console.log(`Number of files ${stdout}`);
});