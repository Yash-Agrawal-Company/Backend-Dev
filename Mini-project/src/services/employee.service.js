import { getEmployees, addEmployee, deleteEmployee, updateEmployee } from "../models/employee.model.js";

export async function getAllEmployees() {
    return await getEmployees();
}

export async function createEmployee(data) {
    if (!data.name || data.salary < 0) return false;

    await addEmployee({
        id: Date.now(),
        name: data.name,
        department: data.department,
        salary: Number(data.salary)
    });
    return true;
}

export async function removeEmployee(id) {
    await deleteEmployee(id);
}

export async function editEmployee(id, data) {
    await updateEmployee(id, data);
}