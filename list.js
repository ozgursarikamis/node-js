const fs = require("fs");
const files = fs.readdirSync("./");

console.log("================= started reading ========================");
files.forEach(item => console.log('item :', item));
console.log("================= ended reading ==========================");
