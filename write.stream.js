const fs = require("fs");

const file = "./assets/file.txt";
const reader = fs.createReadStream(file, { highWaterMark: 8, start: 8, end: 64});

reader.on("data", chunk => {
    console.log('chunk.toString() :', chunk.toString());
});