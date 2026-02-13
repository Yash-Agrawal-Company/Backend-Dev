import { func } from "joi";

function usercreate(name, email, password) {
  try {
    let ob = {
      id: Date.now(),
      name,
      email,
      password,
    };
    let users = [];
    if (fs.existsSync("users.json")) {
      let data = JSON.parse(fs.readFileSync("users.json", "utf-8"));
      if (!data) {
        return null;
      }
      users = data;
    }
    users.push(ob);
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    return true;
  } catch (error) {
    console.log("User create", error);
    return null;
  }
}

function deleteUser(id) {
  try {
    if (!fs.existsSync("users.json")) {
      return null;
    }
    let data = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    let user = data.find((value) => value.id == id);
    if (!user) {
      return "not found";
    }
    let users = data.filter((value) => value.id != id);
  } catch (error) {
    console.log("User delete", error);
    return null;
  }
}

export function userUpdate(id, name, email) {
  try {
    if (!fs.existsSync("users.json")) {
      return null;
    }
    let data = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    let user = data.find((value) => value.id == id);
    if (!user) {
      return "not found";
    }
    let userIndex = data.findIndex((value) => value.id == id);
    data[userIndex].name = name;
    data[userIndex].email = email;
    fs.writeFileSync("users.json", JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  }
}

function userSearch(id){
    try {
        if (!fs.existsSync("users.json")) {
            return null;
        }
        let data = JSON.parse(fs.readFileSync("users.json", "utf-8"));
        let user = data.find((value) => value.id == id);
        if (!user) {
            return "not found";
        }
        return user;
    } catch (error) {
        console.log(error);
    }
}

