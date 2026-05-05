import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  addStock,
  sellStock,
  getPortfolio,
  deleteStock,
  dashboard
} from "../controllers/portfolioController.js";

const router = express.Router();

router.post("/", auth, addStock);
router.get("/", auth, getPortfolio);
router.post("/sell/:id", auth, sellStock);
router.delete("/:id", auth, deleteStock);
router.get("/dashboard", auth, dashboard);

export default router;