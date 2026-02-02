import express from "express";
import mid from "./mid.js";
import saveUser from "./res.js";
import login from "./login.js";
const app = express();
const port = 3000;

app.use(express.json());

app.post("/signup", mid, (req, res, next) => {
  try {
    const result = saveUser(req);

    if (result === "exists") {
      return res.status(409).json({ message: "User already exists" });
    }

    return res.status(201).json({ message: "Signup successful", user: result });
  } catch (err) {
    next(err);
  }
});

app.post("/login", mid, login);


app.listen(port, () => {
  console.log(`Movie Ticket Booking app listening at http://localhost:${port}`);
});
