import fs from 'fs';

export function createUser(name , email , password){
    let employees = []
    let objUser = {
        id : Date.now(), name , email , password
    }
    if(fs.existsSync('employees.json')) {
        let data = JSON.parse(fs.readFileSync('employees.json', 'utf-8'));
        if(!data){
            return null;
        }
        employees = data;
    }
    
    employees.push(objUser);
    fs.writeFileSync('employees.json', JSON.stringify(employees, null, 2));

    console.log("User created successfully")
    return objUser;
}

export function updateUser(id,name,email,password){
    if(fs.existsSync('employees.json')) {
        let data = JSON.parse(fs.readFileSync('employees.json', 'utf-8'));
        if(!data){
            return null;
        }
        let employees = data;
        employees.map((user) => {
            if(user.id == id){
                user.name = name;
                user.email = email;
                user.password = password;
            }
        })
        fs.writeFileSync('employees.json', JSON.stringify(employees, null, 2));
        console.log("User updated successfully")
    }
}

