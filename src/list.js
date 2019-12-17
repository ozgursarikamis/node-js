const fs = require("fs");
const files = fs.readdirSync("./");

console.log("================= started reading ========================");
files.forEach(item => console.log('item :', item));
console.log("================= ended reading ==========================");


// reading files asynchronously:
console.log("================= started reading (async) ========================");
fs.readdir("./", (error, files) => {
    if(error) {
        throw error;
    }
    console.log("complete");
    console.log('files :', files);
});
console.log("================= ended reading (async) ========================");