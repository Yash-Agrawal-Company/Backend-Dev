import express from "express";
import requestLogger from "./src/middleware/logger.js";
import mfaMiddleware from "./src/middleware/mfaMiddleware.js";
import authRoutes from "./src/routes/auth.js";
const app = express();
app.use(express.json());
app.use(requestLogger);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/secure-action", mfaMiddleware, (req, res) => {
  res.json({ message: "Secure action successful" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});