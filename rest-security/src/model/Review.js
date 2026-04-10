import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  comment: String
});

export default mongoose.model("Review", reviewSchema);