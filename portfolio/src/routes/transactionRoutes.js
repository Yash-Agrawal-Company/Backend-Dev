import express from "express";
import auth from "../middleware/authMiddleware.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const data = await Transaction.find({ user: req.userId });
  res.json(data);
});

export default router;