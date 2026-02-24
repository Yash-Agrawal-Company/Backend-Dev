import fs from "fs";

export function getAllUsers() {
  return JSON.parse(fs.readFileSync("employees.json", "utf-8"));
}

export function createUser(name, email, password) {
  let users = getAllUsers();

  let exists = users.find(u => u.email === email);
  if (exists) return null;

  let user = { id: Date.now(), name, email, password };
  users.push(user);

  fs.writeFileSync("employees.json", JSON.stringify(users, null, 2));
  return user;
}

export function findUserByEmail(email) {
  let users = getAllUsers();
  return users.find(u => u.email === email);
}