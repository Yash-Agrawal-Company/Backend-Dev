import express from "express";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth.js";
import activityTracker from "./src/middleware/activityTracker.js";
import sanitizeMiddleware from "./src/middleware/sanitize.js";
const app = express();

app.use(express.json());
app.use(sanitizeMiddleware);

mongoose.connect("mongodb://127.0.0.1:27017/activityDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.use(activityTracker);


app.use("/", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});