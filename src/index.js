const grab = flag => {
    let inedxAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[inedxAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");
console.log({greeting, user });