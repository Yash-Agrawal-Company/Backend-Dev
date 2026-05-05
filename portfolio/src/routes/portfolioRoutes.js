import express from 'express';
import {
  addStock,
  getStocks,
  updateStock,
  deleteStock,
  searchStocks,
  filterStocks,
} from '../controllers/portfolioController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validationMiddleware.js';
import { stockSchema, updateStockSchema } from '../validations/portfolioValidations.js';

const router = express.Router();

router.use(protect);

router.post('/', validate(stockSchema), addStock);
router.get('/', getStocks);
router.get('/search', searchStocks);
router.get('/filter', filterStocks);
router.put('/:id', validate(updateStockSchema), updateStock);
router.delete('/:id', deleteStock);

export default router;
