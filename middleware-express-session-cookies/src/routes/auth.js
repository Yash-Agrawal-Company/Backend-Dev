import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ Create user (for testing)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.json({ message: "User created", user });
});

// ✅ Login
router.post("/login", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.loginAt = new Date();
  await user.save();

  res.json({ message: "Login successful", user });
});

// ✅ Logout
router.post("/logout", async (req, res) => {
  const { userId } = req.body;

  const user = await User.findByIdAndUpdate(
    userId,
    { logoutAt: new Date() },
    { new: true }
  );

  res.json({ message: "Logout successful", user });
});

// ✅ Dummy route to test activity
router.get("/test", async (req, res) => {
  const { userId } = req.query;

  if (userId) {
    await User.findByIdAndUpdate(userId, {});
  }

  res.send("Test route hit");
});

router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(id, {
    isDeleted: true
  });

  res.json({ message: "User soft deleted" });
});

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;