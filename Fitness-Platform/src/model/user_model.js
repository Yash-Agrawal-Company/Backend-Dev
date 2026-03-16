import fs from 'fs'

export default function createUser(name, email, password) {
    const userData = { name, email, password };
    try{
    const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    users.push(userData);
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
    } catch (error) {
        console.log(error)
    }
}