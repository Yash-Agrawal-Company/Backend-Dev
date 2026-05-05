import express from "express"
import dotenv from 'dotenv';
import connectDB from "./src/config/db.js";

const app = express()

app.use(express.json())
connectDB()
app.get("/",(req,res) => {
    res.send("Helllo world server is running")
})

app.listen(5000,() => {
    console.log("Server is running on PORT ")
})