import express from "express"
import dotenv from 'dotenv';
import connectDB from "./src/config/db.js";
import router from "./src/routes/userRoutes.js";

const app = express()

app.use(express.json())
app.use(router)
connectDB()
app.get("/",(req,res) => {
    res.send("Helllo world server is running")
})

app.listen(5000,() => {
    console.log("Server is running on PORT ")
})