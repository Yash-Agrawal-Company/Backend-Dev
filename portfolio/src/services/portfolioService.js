import Portfolio from "../models/Portfolio.js";
import Transaction from "../models/Transaction.js";

export const addStockService = async (userId, data) => {
  const stock = await Portfolio.create({ ...data, user: userId });

  await Transaction.create({
    user: userId,
    stockName: data.stockName,
    type: "BUY",
    quantity: data.quantity,
    price: data.buyPrice
  });

  return stock;
};

export const sellStockService = async (userId, id, quantity) => {
  const stock = await Portfolio.findById(id);

  if (stock.quantity < quantity)
    throw new Error("Not enough stock");

  stock.quantity -= quantity;
  await stock.save();

  await Transaction.create({
    user: userId,
    stockName: stock.stockName,
    type: "SELL",
    quantity,
    price: stock.currentPrice
  });

  return stock;
};