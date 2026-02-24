import express from "express";
import signupMidd from "../middleware/signup.middleware.js";
import { signupService, loginService } from "../services/auth.service.js";

const router = express.Router();

// ================== SIGNUP ==================
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", signupMidd, async (req, res) => {
  try {
    const user = await signupService(req.body);

    if (!user) {
      return res.render("signup", { error: "User already exists" });
    }

    res.redirect("/auth/login");
  } catch (err) {
    console.log(err);
    res.status(500).send("Signup error");
  }
});

// ================== LOGIN ==================
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    if (!token) {
      return res.render("login", { error: "Invalid email or password" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost ke liye false, production me true
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.redirect("/employees");
  } catch (err) {
    console.log(err);
    res.status(500).send("Login error");
  }
});

// ================== LOGOUT ==================
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
});

export default router;