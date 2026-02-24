import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/user.model.js";

export async function signupService(data) {
    const hashed = await bcrypt.hash(data.password, 10);

    return createUser({
        id: Date.now(),
        name: data.name,
        email: data.email,
        password: hashed
    });
}

export async function loginService(email, password) {
    const user = findUserByEmail(email);
    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);
    return match ? user : null;
}