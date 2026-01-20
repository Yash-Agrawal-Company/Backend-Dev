const { createLog, updateLog } = require("./function");
const fs = require("fs");
const path = require("path");


function check(textFile) {
  if (!fs.existsSync(textFile)) {
    createLog(new Date(), "error", "Log file does not exist");
  }else{
    updateLog(new Date(), "error", "Log file does not exist");
  }
}
