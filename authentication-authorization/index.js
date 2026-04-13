import express from "express";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/user.route.js";
import authRoutes from "./src/routes/auth.route.js";
const app = express();

// middleware
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
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