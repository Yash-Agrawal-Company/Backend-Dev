import Portfolio from '../models/Portfolio.js';
import Transaction from '../models/Transaction.js';

// @desc    Add stock (Buy stock)
// @route   POST /api/stocks
// @access  Private
export const addStock = async (req, res, next) => {
  try {
    const { stockName, quantity, buyPrice, currentPrice } = req.body;

    const stock = await Portfolio.create({
      userId: req.user._id,
      stockName,
      quantity,
      buyPrice,
      currentPrice,
    });

    // Create transaction record
    await Transaction.create({
      userId: req.user._id,
      stockName,
      type: 'BUY',
      quantity,
      price: buyPrice,
      totalAmount: quantity * buyPrice,
    });

    res.status(201).json({ success: true, data: stock });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all stocks in portfolio
// @route   GET /api/stocks
// @access  Private
export const getStocks = async (req, res, next) => {
  try {
    const stocks = await Portfolio.find({ userId: req.user._id });
    res.json({ success: true, count: stocks.length, data: stocks });
  } catch (error) {
    next(error);
  }
};

// @desc    Update stock quantity or price
// @route   PUT /api/stocks/:id
// @access  Private
export const updateStock = async (req, res, next) => {
  try {
    let stock = await Portfolio.findById(req.params.id);

    if (!stock) {
      return res.status(404).json({ success: false, message: 'Stock not found' });
    }

    // Make sure user owns stock
    if (stock.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    stock = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({ success: true, data: stock });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete stock (Sell all)
// @route   DELETE /api/stocks/:id
// @access  Private
export const deleteStock = async (req, res, next) => {
  try {
    const stock = await Portfolio.findById(req.params.id);

    if (!stock) {
      return res.status(404).json({ success: false, message: 'Stock not found' });
    }

    if (stock.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    // Record sell transaction before deleting
    await Transaction.create({
      userId: req.user._id,
      stockName: stock.stockName,
      type: 'SELL',
      quantity: stock.quantity,
      price: stock.currentPrice,
      totalAmount: stock.quantity * stock.currentPrice,
    });

    await stock.deleteOne();

    res.json({ success: true, message: 'Stock removed and sell transaction recorded' });
  } catch (error) {
    next(error);
  }
};

// @desc    Search stocks by name
// @route   GET /api/stocks/search
// @access  Private
export const searchStocks = async (req, res, next) => {
  try {
    const { name } = req.query;
    const query = { userId: req.user._id };

    if (name) {
      query.stockName = { $regex: name, $options: 'i' };
    }

    const stocks = await Portfolio.find(query);
    res.json({ success: true, data: stocks });
  } catch (error) {
    next(error);
  }
};

// @desc    Filter stocks by profit/loss
// @route   GET /api/stocks/filter
// @access  Private
export const filterStocks = async (req, res, next) => {
  try {
    const { type } = req.query; // 'profit' or 'loss'
    const stocks = await Portfolio.find({ userId: req.user._id });

    let filteredStocks = stocks;

    if (type === 'profit') {
      filteredStocks = stocks.filter((stock) => stock.currentPrice > stock.buyPrice);
    } else if (type === 'loss') {
      filteredStocks = stocks.filter((stock) => stock.currentPrice < stock.buyPrice);
    }

    res.json({ success: true, count: filteredStocks.length, data: filteredStocks });
  } catch (error) {
    next(error);
  }
};
