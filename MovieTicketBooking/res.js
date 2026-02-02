import fs from "fs";

function saveUser(req) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("All fields are required");
    }
    let users = [];
    const ob = {
      id: Date.now(),
      name,
      email,
      password,
    };

    if (fs.existsSync("user.json")) {
      const data = fs.readFileSync("user.json", "utf-8");
      users = data ? JSON.parse(data) : [];

      const isUser = users.find((u) => u.email === email);
      if (isUser) {
        return res.status(409).send("User already exists");
      }
    }

    users.push(ob);
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));

    return ob;
  } catch (error) {
    console.log(error);
  }
}

export default saveUser;
