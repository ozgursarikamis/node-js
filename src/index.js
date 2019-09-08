const users = require("./modules/users");

const user = users.getUserInfo();
console.log('user :', user);

const message = users.message;
console.log('message :', message);

console.log('globals :', {__dirname, __filename });

const path = require("path");
const filename = path.basename(__filename);
console.log('path.basename(__filename) :', filename);

console.log('process.id :', process.pid);
console.log('process.versions.node :', process.versions.node);
console.log('process.argv :', process.argv);

const [,,firstName, lastName] = process.argv;
console.log('firstName :', firstName);
console.log('lastName :', lastName);