import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import portfolioRoutes from "./src/routes/portfolioRoutes.js";
import transactionRoutes from "./src/routes/transactionRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/transactions", transactionRoutes);

export default app;