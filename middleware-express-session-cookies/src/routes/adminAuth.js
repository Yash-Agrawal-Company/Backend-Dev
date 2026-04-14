import express from "express";
import User from "../models/User.js";

const router = express.Router();



router.post("/login", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  req.session.user = {
    id: user._id,
    role: user.role
  };

  if (req.cookies.cart) {
    const cookieCart = JSON.parse(req.cookies.cart);

    req.session.cart = [
      ...(req.session.cart || []),
      ...cookieCart
    ];

    res.clearCookie("cart"); // remove cookie cart
  }

  res.json({
    message: "Logged in",
    user: req.session.user,
    cart: req.session.cart || []
  });
});


router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
});

export default router;