const fs = require("fs");

const file = "./assets/file.txt";
const reader = fs.createReadStream(file);

reader.on("data", chunk => {
    console.log('chunk.toString() :', chunk.toString());
});

reader.pipe(fs.createWriteStream("./assets/file_write.txt"))
        .on("data", chunk => {
        console.log('chunk.toString() :', chunk.toString());
        })
        .on("error", error => {
            console.error(error);
            throw error;            
    })

// The close event is called once the read stream is all over
.on("close", () => {
    console.warn("warning: on.close event");
    console.info("info: on.close event");
})