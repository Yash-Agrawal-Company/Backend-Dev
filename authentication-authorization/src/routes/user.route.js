import express from "express";
import { createUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/create", createUser);

export default router;