const { exec } = require('child_process');

// exec('cd ../ && cd ../ && dir', (err, stdout, stderr) => {
//     if (err) {
//         console.error(`exec error: ${err}`);
//         return;
//     }
//     console.log(`Number of files ${stdout}`);
// });

exec('ls', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }
    console.log(`Number of files ${stdout}`);
});

