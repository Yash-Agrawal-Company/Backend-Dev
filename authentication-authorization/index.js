import express from "express";
import connectDB from "./src/config/db.js";

const app = express();

// middleware
app.use(express.json());

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});