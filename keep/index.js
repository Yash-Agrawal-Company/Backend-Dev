import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("server is running");
})