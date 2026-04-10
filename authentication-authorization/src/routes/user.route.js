import express from "express";
import { createUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createUser);

export default router;