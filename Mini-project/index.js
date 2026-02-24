import express from "express";
import helmet from "helmet";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import empRoutes from "./routes/employee.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", empRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));