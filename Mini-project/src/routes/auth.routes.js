import express from "express";
import signupMidd from "../middleware/signup.middleware.js";
import { signupService, loginService } from "../services/auth.service.js";

const router = express.Router();

router.post("/signup", signupMidd, async (req, res) => {
  const user = await signupService(req.body);

  if (!user) return res.json({ message: "User exists" });

  res.redirect("/auth/login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const token = await loginService(req.body.email, req.body.password);

  if (!token) return res.json({ message: "Invalid credentials" });

  res.json({ token });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

export default router;