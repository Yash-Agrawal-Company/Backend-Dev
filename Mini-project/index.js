import express from 'express';
import dotenv from 'dotenv';
import signupMidd from './src/Midd/SignupMidd.js';
import userSignupService from './src/service/signupService.js';
import { createUser } from './src/model/user.model.js';
import { StatusCodes } from 'http-status-pro-js';
dotenv.config();
const app = express();
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

app.post('/signup', signupMidd, userSignupService);
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});