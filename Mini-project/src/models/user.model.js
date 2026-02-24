import fs from "fs";

export function createUser(user) {
    let users = [];

    if (fs.existsSync("users.json")) {
        users = JSON.parse(fs.readFileSync("users.json"));
    }

    users.push(user);
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    return user;
}

export function findUserByEmail(email) {
    if (!fs.existsSync("users.json")) return null;

    const users = JSON.parse(fs.readFileSync("users.json"));
    return users.find(u => u.email === email);
}