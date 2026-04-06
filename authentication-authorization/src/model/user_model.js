import fs from "fs";

export default function createUser(name, email, password) {
  const user = {
    id : Date.now(),
    name,
    email,
    password,
  };
  try {
    if (fs.existsSync("users.json")) {
      const data = fs.readFileSync("users.json");
      const users = JSON.parse(data);
      users.push(user);
      fs.writeFileSync("users.json", JSON.stringify(users,null,2), "utf-8");
    } else {
        
      fs.writeFileSync("users.json", JSON.stringify([user],null,2), "utf-8");
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
