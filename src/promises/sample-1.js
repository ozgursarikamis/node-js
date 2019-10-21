new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('result')
    // }, 500);
    throw new Error("error from resolve!")
})
.then(console.log)
.catch(error => {
    console.error(error);
    console.warn("------------------------")
});