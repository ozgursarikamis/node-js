/*
When you want to execute some piece of code asynchronously, 
but as soon as possible, one option is to use the setImmediate()
*/

setImmediate(() => {
    console.warn("setImmediate");
})