import jwt from "jsonwebtoken";
import { verifyOTP } from "../utils/otpStore.js";

const mfaMiddleware = (req, res, next) => {
  try {
    // 🔹 1. Get token
    const token = req.headers.authorization?.split(" ")[1];


    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 🔹 2. Verify JWT
    const decoded = jwt.verify(token, "secretkey123");

    // 🔹 3. Get OTP from request
    const { otp } = req.body;

    if (!otp) {
      return res.status(401).json({ message: "OTP required" });
    }

    // 🔹 4. Verify OTP
    const isValidOTP = verifyOTP(decoded.userId, otp);

    if (!isValidOTP) {
      return res.status(401).json({ message: "Invalid OTP" });
    }

    // 🔹 5. Attach user
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default mfaMiddleware;