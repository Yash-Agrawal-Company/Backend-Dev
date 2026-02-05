import fs from 'fs';
function createTodo(name,task) {
    try {
        let ob = {
            id : new Date(),
            createdAt : new Date(),
            task,status : false
        }
        if (fs.existsSync('todo.json')) {
           let data = JSON.parse(fs.readFileSync('todo.json','utf-8'));
           for(let i = 0; i < data.length; i++){
            if(data[i].name === name){
                data[i].todo.push(ob);
                fs.writeFileSync('todo.json',JSON.stringify(data,null,2));
                console.log("Todo Added succesffully")
            }
        }
    }
    }catch (err) {
        console.log(err);
    }
}
export default createTodo;