import fs from 'fs';

function readTodo(name) {
    try {
        if (fs.existsSync('todo.json')) {
            let data = JSON.parse(fs.readFileSync('todo.json', 'utf-8'));
            let found = false;

            for (let i = 0; i < data.length; i++) {
                if (data[i].name === name) {
                    found = true;
                    console.log(`Todos for ${name}:`);
                    console.log(data[i].todo);
                }
            }

            if (!found) {
                console.log("User not found");
            }
        } else {
            console.log("todo.json file does not exist");
        }
    } catch (err) {
        console.log(err);
    }
}

export default readTodo;