import express from "express";
import requestLogger from "./src/middleware/logger.js";

const app = express();

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});