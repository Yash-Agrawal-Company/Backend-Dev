import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import createUser from './src/model/user_model.js';

dotenv.config()
const app = express();

app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome to the Fitness Platform API');
});

app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    createUser(name, email, password);
    res.status(201).send('User created successfully');
});

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
})
