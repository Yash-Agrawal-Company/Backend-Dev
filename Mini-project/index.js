import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.routes.js";
import employeeRoutes from "./src/routes/employee.routes.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
   if(req.session.user){
       res.redirect("/dashboard");
   } else {
       res.redirect("/auth/login");
   }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});