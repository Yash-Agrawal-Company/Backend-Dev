import express from "express";
import mid from "./mid.js";
import saveUser from "./res.js";
import login from "./login.js";
import usermidd3 from "./midd3.js";
const app = express();
const port = 3000;

import {
StatusCodes
} from 'http-status-pro-js';
import cors from "cors";
app.use(express.json());
app.use(cors());
app.post("/signup", usermidd3, (req, res) => {
  try {
    const result = saveUser(req);

    if (result === "exists") {
      return res.status(StatusCodes.CONFLICT.code)
    }
    //   console.log("This is the code of package of http codes"+res.StatusCodes.code)
    //  console.log("This is the message of package of http codes"+res.StatusCodes.message)
    return  res.status(StatusCodes.CREATED.code).json({
      code : StatusCodes.CREATED.code,
      message : StatusCodes.CREATED.message,
      data : null,
    })
    
  } catch (err) {
    next(err);
  }
});

app.post("/login", mid, login);


app.listen(port, () => {
  console.log(`Movie Ticket Booking app listening at http://localhost:${port}`);
});
