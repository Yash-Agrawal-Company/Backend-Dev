import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/user.model.js";

export async function signupService(data) {
  const hashed = await bcrypt.hash(data.password, 10);
  return createUser(data.name, data.email, hashed);
}

export async function loginService(email, password) {
  const user = findUserByEmail(email);

  if (!user) return null;

  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
}