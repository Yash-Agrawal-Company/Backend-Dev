import { readData, writeData } from "../modules/fileHandler.js";

export async function getEmployees() {
    return await readData();
}

export async function addEmployee(emp) {
    const data = await readData();
    data.push(emp);
    await writeData(data);
}

export async function deleteEmployee(id) {
    let data = await readData();
    data = data.filter(e => e.id != id);
    await writeData(data);
}

export async function updateEmployee(id, newData) {
    const data = await readData();
    data.forEach(e => {
        if (e.id == id) Object.assign(e, newData);
    });
    await writeData(data);
}