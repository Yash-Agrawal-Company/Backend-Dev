import express from 'express';
import dotenv from 'dotenv';
import { createUser } from './src/model/user.js';
import { StatusCodes } from 'http-status-pro-js';
dotenv.config();
const app = express();
const port = process.env.PORT
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/data', (req, res) => {
   const {name,email,password} = req.body;
   if(!name || !email || !password){
     return res.status(StatusCodes.BAD_REQUEST.code).json({
        code : StatusCodes.BAD_REQUEST.code,
        message : StatusCodes.BAD_REQUEST.message,
        data : null
     })
   }    
   createUser(name,email,password);
    res.status(StatusCodes.CREATED.code).json({
        code : StatusCodes.CREATED.code,
        message : StatusCodes.CREATED.message,
        data : null
     })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});