const { log } = require('console');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'app.log');

function createLog(date,type,data){
    fs.writeFileSync(
        logFile,
        `Date : ${date}\nType : ${type}\nMessage : ${data}\n\n`,
    );
    return "Log created successfully"
}
function readLog(){
    if(!fs.existsSync(logFile)){
        return "Log file does not exist";
    }
    return fs.readFileSync(logFile,'utf-8');
}
function updateLog(date,type,data){
    fs.appendFileSync(
        logFile,
        `Date : ${date}\nType : ${type}\nMessage : ${data}\n\n`,
    );
    return "Log updated successfully"
}
let count = 0;
setInterval(() => {
    count++;
    if(count == 10){
        clearInterval(updateLog(new Date(),"error","This is error"))
    }
    console.log(updateLog(new Date(),"error","This is error"));
}, 1000);

module.exports = {createLog,readLog,updateLog};