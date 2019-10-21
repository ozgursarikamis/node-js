const p = new Promise((resolve, reject) => {
    throw new Error("ERROR!");
}).then(console.log);

process.on('unhandledRejection', error => {
    console.warn("unhandledRejection");
    console.log("---------------------------------- STACK:");
    console.error(error.stack);
})
