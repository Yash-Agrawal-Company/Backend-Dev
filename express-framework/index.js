import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());

const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const users = [
    { id: 1, name: "Yash" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Rahul" },
    { id: 4, name: "Riya" }
];

app.get("/users", (req, res) => {
    const { name } = req.query;

    let filteredUsers = users;

    if (name) {
        filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    res.render("users", { users: filteredUsers });
});

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});