/*
Exercise 5: Event Loop
Write a program demonstrating the execution order of setTimeout, setImmediate,
process.nextTick, and Promise callbacks.
*/

//setTimeout

setTimeout(() => {
    console.log("This will come after 5 seconds")
}, 10000);

//setImmediate

//process.nextTick


setImmediate(() => {
    console.log("This will come after 0 seconds")
});
