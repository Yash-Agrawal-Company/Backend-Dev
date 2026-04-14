import express from "express";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth.js";
import activityTracker from "./src/middleware/activityTracker.js";
import sanitizeMiddleware from "./src/middleware/sanitize.js";
import session from "express-session";
import multiStepRoutes from "./src/routes/multiStep.js";
import cookieParser from "cookie-parser";
import languageRoutes from "./src/routes/language.js";
import adminAuthRoutes from "./src/routes/adminAuth.js";
import adminRoutes from "./src/routes/admin.js";
import sessionTimeout from "./src/middleware/sessionTimeout.js";
const app = express();

app.use("/lang", languageRoutes);
app.use(cookieParser());
app.use(express.json());
app.use(sanitizeMiddleware);
app.use(session({
  secret: "secretkey123",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 30 // 30 minutes
  }
}));
app.use("/multi", multiStepRoutes);

app.use("/admin-auth", adminAuthRoutes);
app.use("/admin", adminRoutes);

app.use(session({
  secret: "secretkey123",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 5 // 5 minutes (for testing)
  }
}));

app.use(sessionTimeout);

mongoose.connect("mongodb://127.0.0.1:27017/activityDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.use(activityTracker);


app.use("/", authRoutes);


app.get("/session-info", (req, res) => {
  res.json({
    message: "Session active",
    user: req.session.user || null
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});