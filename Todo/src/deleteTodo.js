import fs from 'fs';

function deleteTodo(todoId) {
    try {
        if (fs.existsSync('todo.json')) {
            let data = JSON.parse(fs.readFileSync('todo.json', 'utf-8'));
            let todoDeleted = false;

            for (let i = 0; i < data.length; i++) {
                let originalLength = data[i].todo.length;

                data[i].todo = data[i].todo.filter(
                    (todo) => todo.id !== todoId
                );

                if (data[i].todo.length < originalLength) {
                    todoDeleted = true;
                }
            }

            if (todoDeleted) {
                fs.writeFileSync(
                    'todo.json',
                    JSON.stringify(data, null, 2)
                );
                console.log("Todo deleted successfully");
            } else {
                console.log("Todo not found");
            }

        } else {
            console.log("todo.json file does not exist");
        }
    } catch (err) {
        console.log(err);
    }
}

export default deleteTodo;