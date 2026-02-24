import express from "express";
import { getAllEmployees, createEmployee, removeEmployee, editEmployee } from "../services/employee.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const employees = await getAllEmployees();
    res.render("index", { employees });
});

router.get("/add", (req, res) => res.render("add"));

router.post("/add", async (req, res) => {
    await createEmployee(req.body);
    res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
    await removeEmployee(req.params.id);
    res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
    const employees = await getAllEmployees();
    const emp = employees.find(e => e.id == req.params.id);
    res.render("edit", { emp });
});

router.post("/edit/:id", async (req, res) => {
    await editEmployee(req.params.id, req.body);
    res.redirect("/");
});

export default router;