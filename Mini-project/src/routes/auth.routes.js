import express from "express";
import signupMidd from "../middleware/signup.middleware.js";
import { signupService, loginService } from "../services/auth.service.js";

const router = express.Router();

router.get("/signup", (req, res) => res.render("signup"));
router.get("/login", (req, res) => res.render("login"));

router.post("/signup", signupMidd, async (req, res) => {
    await signupService(req.body);
    res.redirect("/login");
});

router.post("/login", async (req, res) => {
    const user = await loginService(req.body.email, req.body.password);
    if (!user) return res.send("Invalid Credentials");

    res.redirect("/");
});

export default router;