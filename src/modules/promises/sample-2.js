const wait = time => new Promise((resolve, reject) => {
    setTimeout(resolve, time);
})

wait(500).then(() => {
    setTimeout(() => {
        console.log('!Hello');        
    }, 1500);
})
    .then(() => console.log('!Hello again'));