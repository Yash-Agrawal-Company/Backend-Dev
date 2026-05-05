import Transaction from '../models/Transaction.js';

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private
export const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 });

    res.json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    next(error);
  }
};
