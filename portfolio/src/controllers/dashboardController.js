import Portfolio from '../models/Portfolio.js';

// @desc    Get portfolio dashboard stats
// @route   GET /api/dashboard
// @access  Private
export const getDashboardStats = async (req, res, next) => {
  try {
    const stocks = await Portfolio.find({ userId: req.user._id });

    let totalInvestment = 0;
    let currentPortfolioValue = 0;

    const stockPerformance = stocks.map((stock) => {
      const investment = stock.buyPrice * stock.quantity;
      const currentValue = stock.currentPrice * stock.quantity;
      const profitLoss = currentValue - investment;

      totalInvestment += investment;
      currentPortfolioValue += currentValue;

      return {
        stockName: stock.stockName,
        quantity: stock.quantity,
        buyPrice: stock.buyPrice,
        currentPrice: stock.currentPrice,
        investment,
        currentValue,
        profitLoss,
        profitPercentage: ((profitLoss / investment) * 100).toFixed(2) + '%',
      };
    });

    const totalProfitLoss = currentPortfolioValue - totalInvestment;

    res.json({
      success: true,
      data: {
        totalInvestment,
        currentPortfolioValue,
        totalProfitLoss,
        profitPercentage: totalInvestment > 0 ? ((totalProfitLoss / totalInvestment) * 100).toFixed(2) + '%' : '0%',
        individualPerformance: stockPerformance,
      },
    });
  } catch (error) {
    next(error);
  }
};
