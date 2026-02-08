import fs from 'fs';
import path from 'path';

const sourceDir = './source';
const destDir = './destination';

function syncDirectories(src, dest) {
    try {
        if (!fs.existsSync(src)) {
            console.log("Source directory does not exist");
            return;
        }

        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
            console.log("Destination directory created");
        }

        const files = fs.readdirSync(src);

        files.forEach(file => {
            const srcPath = path.join(src, file);
            const destPath = path.join(dest, file);

            if (fs.lstatSync(srcPath).isFile()) {

                if (!fs.existsSync(destPath)) {
                    fs.copyFileSync(srcPath, destPath);
                    console.log(`Copied: ${file}`);
                } else {
                    const srcStat = fs.statSync(srcPath);
                    const destStat = fs.statSync(destPath);

                    if (srcStat.mtime > destStat.mtime) {
                        fs.copyFileSync(srcPath, destPath);
                        console.log(`Updated: ${file}`);
                    }
                }
            }
        });

        console.log("\nDirectory synchronization completed successfully");

    } catch (err) {
        console.log("Error occurred:", err.message);
    }
}

syncDirectories(sourceDir, destDir);