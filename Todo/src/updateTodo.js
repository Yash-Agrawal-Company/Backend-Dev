import fs from 'fs';

function updateTodo(todoId,name,task, newStatus) {
    try {
        if (fs.existsSync('todo.json')) {
            let data = JSON.parse(fs.readFileSync('todo.json', 'utf-8'));
            let userFound = false;
            let todoFound = false;

            for (let i = 0; i < data.length; i++) {
                if (data[i].name === name) {
                    userFound = true;

                    for (let j = 0; j < data[i].todo.length; j++) {
                        if (data[i].todo[j].id === todoId) {
                            data[i].todo[j].task = task;
                            data[i].todo[j].status = newStatus;

                            todoFound = true;

                            fs.writeFileSync(
                                'todo.json',
                                JSON.stringify(data, null, 2)
                            );

                            console.log("Todo updated successfully");
                        }
                    }
                }
            }

            if (!userFound) {
                console.log("User not found");
            } else if (!todoFound) {
                console.log("Todo not found");
            }

        } else {
            console.log("todo.json file does not exist");
        }
    } catch (err) {
        console.log(err);
    }
}

export default updateTodo;