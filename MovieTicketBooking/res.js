import fs from "fs";
import {
StatusCodes
} from 'http-status-pro-js';
import bcrypt, { hashSync } from "bcrypt";
function saveUser(req) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION.code).json({
        code : StatusCodes.NON_AUTHORITATIVE_INFORMATION.code,
        message : StatusCodes.NON_AUTHORITATIVE_INFORMATION.message,
        data : null
      })
    }
    let users = [];

    let salt = bcrypt.genSaltSync(10);
    let hpassword = hashSync(password, salt);

    const ob = {
      id: Date.now(),
      name,
      email,
      password : hpassword,
    };

    if (fs.existsSync("user.json")) {
      const data = fs.readFileSync("user.json", "utf-8");
      users = data ? JSON.parse(data) : [];

      const isUser = users.find((u) => u.email === email);
      if (isUser) {
        return res.status(StatusCodes.CONFLICT)
      }
    }

    users.push(ob);
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
    
    return 
  } catch (error) {
    console.log(error);
  }
}

export default saveUser;
