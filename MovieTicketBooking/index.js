import express from "express";
import mid from "./mid.js";
import saveUser from "./res.js";
import login from "./login.js";
const app = express();
const port = 3000;
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';
import cors from "cors";
app.use(express.json());
app.use(cors());
app.post("/signup", mid, (req, res, next) => {
  try {
    const result = saveUser(req);

    if (result === "exists") {
      return res.status(StatusCodes.CONFLICT)
    }

    return res.status(StatusCodes.CREATED)
  } catch (err) {
    next(err);
  }
});

app.post("/login", mid, login);


app.listen(port, () => {
  console.log(`Movie Ticket Booking app listening at http://localhost:${port}`);
});
