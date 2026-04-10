import express from "express";
import bcrypt from "bcryptjs";
import User from "../model/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.json(user);
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  req.session.user = {
    id: user._id,
    role: user.role
  };

  res.json({ msg: "Login successful" });
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ msg: "Logged out" });
});

export default router;