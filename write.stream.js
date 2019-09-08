const fs = require("fs");

// const readStream = fs.createReadStream("./assets/file.txt");
require('fs').createReadStream("./assets/file.txt").on("data", chunk => {
    console.log('chunk.toString() :', chunk.toString());
})