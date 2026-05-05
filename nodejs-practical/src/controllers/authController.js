import express from 'express'
import User from '../models/User.js'
const router = express.Router()

  const registerUser = async (req,res) => {
    console.log("Insite function")
    const {name,email,password,role} = req.body
    try {
        const user = await User.create({
            name,email,password,role
        })
        res.status(201).json(user)
    } catch (error) {
        console.log("THE ERROR IS ",error)
        res.status(400).json({ message: error.message })
    }
}

export default registerUser