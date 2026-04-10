import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/search", async (req, res) => {
  let search = req.query.search;

  // ✅ Prevent injection
  if (typeof search !== "string") {
    return res.status(400).json({ msg: "Invalid search" });
  }

  search = search.replace(/[$.]/g, ""); // remove dangerous chars

  const products = await Product.find({
    name: { $regex: search, $options: "i" }
  });

  res.json(products);
});

export default router;