import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    stockName: String,
    type: { type: String, enum: ["BUY", "SELL"] },
    quantity: Number,
    price: Number
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);