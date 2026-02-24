import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
  editEmployee
} from "../services/employee.service.js";

const router = express.Router();

router.get("/", authMiddleware, getEmployees);
router.post("/add", authMiddleware, addEmployee);
router.get("/delete/:id", authMiddleware, deleteEmployee);
router.post("/edit/:id", authMiddleware, editEmployee);

export default router;