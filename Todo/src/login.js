import fs from 'fs';
function login(email,password){
    try{
        if(!fs.existsSync('todo.json')){
            console.log("File does not exits")
        }
        let data = JSON.parse(fs.readFileSync('todo.json','utf-8'));
        let authenticated = data.some((user) => (user.email === email) && (user.password === password))
        if(authenticated){
            console.log("User login successfully")
        }else{
            console.log("User credentials does not match")
        }
    }catch(err){
        console.log(err)
    }
}
export default login