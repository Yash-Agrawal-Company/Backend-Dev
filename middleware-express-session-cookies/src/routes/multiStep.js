import express from "express";
import User from "../models/User.js";

const router = express.Router();


// ✅ Step 1
router.post("/step1", (req, res) => {
  const { name } = req.body;

  req.session.userData = {
    ...req.session.userData,
    name
  };

  res.json({ message: "Step 1 saved", data: req.session.userData });
});


// ✅ Step 2
router.post("/step2", (req, res) => {
  const { email } = req.body;

  req.session.userData = {
    ...req.session.userData,
    email
  };

  res.json({ message: "Step 2 saved", data: req.session.userData });
});


// ✅ Step 3
router.post("/step3", (req, res) => {
  const { password } = req.body;

  req.session.userData = {
    ...req.session.userData,
    password
  };

  res.json({ message: "Step 3 saved", data: req.session.userData });
});


// ✅ Final Submit
router.post("/submit", async (req, res) => {
  const data = req.session.userData;

  if (!data) {
    return res.status(400).json({ message: "No session data found" });
  }

  const user = new User(data);
  await user.save();

  req.session.userData = null; // clear session

  res.json({ message: "User registered successfully", user });
});

export default router;