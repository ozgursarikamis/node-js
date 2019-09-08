const fs = require("fs");

const file = "./assets/file.txt";
const reader = fs.createReadStream(file, { });

reader.on("data", chunk => {
    console.log('chunk.toString() :', chunk.toString());
});

reader.pipe(fs.createWriteStream("./assets/file_write.txt"))
    .on("data", chunk => {
        console.log('chunk.toString() :', chunk.toString());
});