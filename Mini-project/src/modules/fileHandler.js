import fs from "fs/promises";

const filePath = "./employees.json";

export async function readData() {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data || "[]");
    } catch (err) {
        console.log("Read error:", err);
        return [];
    }
}

export async function writeData(data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.log("Write error:", err);
        return false;
    }
}