import fs from 'fs';
function createUser(name,email,password){
    try{
        let user = [];
        let ob = {
            id : new Date() , name , email,password,todo : [],
        }
        if(fs.existsSync('todo.json')){
            let data = JSON.parse(fs.readFileSync('todo.json','utf-8'));
            let isUser = data.some((user)=> user.name === name);
            if(isUser){
               console.log("User already exists");
               return;
            }
            user = data;
        }
        user.push(ob);
        fs.writeFileSync('todo.json',JSON.stringify(user,null,2));
        console.log("User Created Successfully");

    }catch(err){
        console.log(err);
    }
}
export default createUser
        