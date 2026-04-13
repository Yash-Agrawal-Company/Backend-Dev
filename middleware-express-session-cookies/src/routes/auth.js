import express from "express";
import jwt from "jsonwebtoken";
import { setOTP } from "../utils/otpStore.js";

const router = express.Router();

// login route (generate token + OTP)
router.post("/login", (req, res) => {
  const { userId } = req.body;

  // create JWT
  const token = jwt.sign({ userId }, "secretkey123");

  // generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  setOTP(userId, otp);

  console.log("OTP:", otp); // simulate sending OTP

  res.json({ token, message: "OTP sent" });
});

export default router;