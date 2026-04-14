import jwt from "jsonwebtoken";
import { verifyOTP } from "../utils/otpStore.js";

const mfaMiddleware = (req, res, next) => {
  try {

    const token = req.headers.authorization?.split(" ")[1];


    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, "secretkey123");

    
    const { otp } = req.body;

    if (!otp) {
      return res.status(401).json({ message: "OTP required" });
    }

   
    const isValidOTP = verifyOTP(decoded.userId, otp);

    if (!isValidOTP) {
      return res.status(401).json({ message: "Invalid OTP" });
    }

  
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default mfaMiddleware;