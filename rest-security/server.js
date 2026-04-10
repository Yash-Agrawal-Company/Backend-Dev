import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";
import dotenv from "dotenv";

import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(xss());

// ✅ Helmet config
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https://cdn.example.com"],
        scriptSrc: ["'self'", "https://www.youtube.com"],
        frameSrc: ["https://www.youtube.com"]
      }
    }
  })
);

// ✅ Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// ✅ MongoStore session
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
      maxAge: 1000 * 60 * 30 // 30 minutes (FIXED issue)
    }
  })
);

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running"));