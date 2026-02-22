import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.url} - ${duration}ms`);
    });

    next();
});
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const users = [
    { id: 1, name: "Yash" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Rahul" },
    { id: 4, name: "Riya" }
];
let posts = [
    { id: 1, title: "First Post", content: "Welcome to my blog" },
    { id: 2, title: "Node.js", content: "Learning Node is fun" }
];
app.get("/blog", (req, res) => {
    res.render("blog", { posts });
});
app.get("/blog/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("post", { post });
});
app.get("/new-post", (req, res) => {
    res.render("newPost");
});
app.post("/new-post", (req, res) => {
    const { title, content } = req.body;

    posts.push({
        id: posts.length + 1,
        title,
        content
    });

    res.redirect("/blog");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.post("/contact", (req, res) => {
    console.log(req.body);
    res.send("Form submitted successfully!");
});
app.get("/gallery", (req, res) => {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    res.render("gallery", { images });
});
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

app.use((req, res) => {
    res.status(404).render("404");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});