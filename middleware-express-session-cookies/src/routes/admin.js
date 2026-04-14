import express from "express";
import { isAuthenticated,isAdmin } from "./auth.js";


const router = express.Router();



router.get("/dashboard", isAuthenticated, isAdmin, (req, res) => {
  res.json({
    message: "Welcome Admin",
    user: req.session.user
  });
});



router.get("/profile", isAuthenticated, (req, res) => {
  res.json({
    message: "User Profile",
    user: req.session.user
  });
});

export default router;