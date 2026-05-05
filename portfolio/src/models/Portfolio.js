import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    stockName: {
      type: String,
      required: [true, 'Please add a stock name'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Please add quantity'],
      min: [1, 'Quantity must be at least 1'],
    },
    buyPrice: {
      type: Number,
      required: [true, 'Please add buy price'],
    },
    currentPrice: {
      type: Number,
      required: [true, 'Please add current price'],
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
