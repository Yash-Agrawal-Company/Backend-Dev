const {createLog, readLog, updateLog} = require('./function');

console.log(createLog(new Date(),"error","This is error"));
console.log(readLog());
console.log(updateLog(new Date(),"error","This is error"));