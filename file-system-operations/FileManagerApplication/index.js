import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log(`
========= FILE MANAGER =========
1. Read File
2. Write File
3. Copy File
4. Delete File
5. List Directory
6. Exit
================================
    `);

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                readFile();
                break;
            case "2":
                writeFile();
                break;
            case "3":
                copyFile();
                break;
            case "4":
                deleteFile();
                break;
            case "5":
                listDirectory();
                break;
            case "6":
                console.log("Exiting...");
                rl.close();
                break;
            default:
                console.log("Invalid choice");
                showMenu();
        }
    });
}

// ---------- FUNCTIONS ----------

function readFile() {
    rl.question("Enter file name: ", (file) => {
        try {
            const data = fs.readFileSync(file, "utf-8");
            console.log("\nFile Content:\n", data);
        } catch (err) {
            console.log("Error reading file:", err.message);
        }
        showMenu();
    });
}

function writeFile() {
    rl.question("Enter file name: ", (file) => {
        rl.question("Enter content: ", (content) => {
            try {
                fs.writeFileSync(file, content);
                console.log("File written successfully");
            } catch (err) {
                console.log("Error writing file:", err.message);
            }
            showMenu();
        });
    });
}

function copyFile() {
    rl.question("Enter source file: ", (src) => {
        rl.question("Enter destination file: ", (dest) => {
            try {
                fs.copyFileSync(src, dest);
                console.log("File copied successfully");
            } catch (err) {
                console.log("Error copying file:", err.message);
            }
            showMenu();
        });
    });
}

function deleteFile() {
    rl.question("Enter file name to delete: ", (file) => {
        try {
            fs.unlinkSync(file);
            console.log("File deleted successfully");
        } catch (err) {
            console.log("Error deleting file:", err.message);
        }
        showMenu();
    });
}

function listDirectory() {
    rl.question("Enter directory path (or . for current): ", (dir) => {
        try {
            const files = fs.readdirSync(dir);
            console.log("\nDirectory Contents:");
            files.forEach(file => console.log(file));
        } catch (err) {
            console.log("Error listing directory:", err.message);
        }
        showMenu();
    });
}

// Start Program
showMenu();