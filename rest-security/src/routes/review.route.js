import express from "express";
import validator from "validator";
import Review from "../models/Review.js";

const router = express.Router();

router.post("/", async (req, res) => {
  let { comment, productId } = req.body;

  // ✅ Escape XSS
  comment = validator.escape(comment);

  const review = await Review.create({
    comment,
    productId,
    userId: req.session.user?.id
  });

  res.json(review);
});

export default router;