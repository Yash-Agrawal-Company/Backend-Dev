import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getAllEmployees,
  createEmployee,
  removeEmployee,
  editEmployee
} from "../services/employee.service.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const employees = await getAllEmployees();
  res.render("index", { employees });
});

router.get("/add", authMiddleware, (req, res) => {
  res.render("add");
});

router.post("/add", authMiddleware, async (req, res) => {
  await createEmployee(req.body);
  res.redirect("/employees");
});

router.get("/delete/:id", authMiddleware, async (req, res) => {
  await removeEmployee(req.params.id);
  res.redirect("/employees");
});

router.get("/edit/:id", authMiddleware, async (req, res) => {
  const employees = await getAllEmployees();
  const employee = employees.find(e => e.id == req.params.id);
  res.render("edit", { employee });
});

router.post("/edit/:id", authMiddleware, async (req, res) => {
  await editEmployee(req.params.id, req.body);
  res.redirect("/employees");
});

export default router;