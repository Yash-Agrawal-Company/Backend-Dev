import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.redirect("/employees");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});