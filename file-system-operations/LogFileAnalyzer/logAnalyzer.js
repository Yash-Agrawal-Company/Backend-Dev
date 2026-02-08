import fs from 'fs';
import readline from 'readline';

const filePath = 'app.log';

let totalLines = 0;
let errorCount = 0;
let warningCount = 0;
let infoCount = 0;

// Create read stream
const fileStream = fs.createReadStream(filePath);

// Create readline interface using stream
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

// Read file line by line
rl.on('line', (line) => {
    totalLines++;

    if (line.includes("ERROR")) errorCount++;
    else if (line.includes("WARN")) warningCount++;
    else if (line.includes("INFO")) infoCount++;
});

// When file reading is complete
rl.on('close', () => {
    console.log("\n===== LOG FILE SUMMARY =====");
    console.log("Total Lines   :", totalLines);
    console.log("INFO Count    :", infoCount);
    console.log("WARNING Count :", warningCount);
    console.log("ERROR Count   :", errorCount);
    console.log("============================");
});