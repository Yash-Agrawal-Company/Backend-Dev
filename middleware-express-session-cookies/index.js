import express from "express";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth.js";
import activityTracker from "./src/middleware/activityTracker.js";

const app = express();

app.use(express.json());

// ✅ DB connection
mongoose.connect("mongodb://127.0.0.1:27017/activityDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Middleware
app.use(activityTracker);

// ✅ Routes
app.use("/", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});