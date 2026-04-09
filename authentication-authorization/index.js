import express from "express";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/user.route.js";
const app = express();

// middleware
app.use("/api/users", userRoutes);
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