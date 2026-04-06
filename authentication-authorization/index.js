import express from 'express';
import createUser from './src/model/user_model.js';


const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  createUser(name, email, password);
  res.send('User created successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});