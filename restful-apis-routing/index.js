import express from "express";
import { validateYear } from "./midd.js";
const app = express();
const PORT = 3000;
let authors = [
    { id: 1, name: "Tolkien", country: "UK" },
    { id: 2, name: "Rowling", country: "UK" }
];
let books = [
    { id: 1, title: "The Hobbit", author: "Tolkien", year: 1937 },
    { id: 2, title: "Harry Potter", author: "Rowling", year: 1997 },
    { id: 3, title: "Clean Code", author: "Robert Martin", year: 2008 },
    { id: 4, title: "JavaScript Guide", author: "Yash", year: 2024 }
];
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Books API Running...");
});
app.get("/authors", (req, res) => {
    res.json(authors);
});
app.get("/authors/:id", (req, res) => {
    const author = authors.find(a => a.id == req.params.id);

    if (!author) {
        return res.status(404).json({ error: "Author not found" });
    }

    res.json(author);
});
app.post("/authors", (req, res) => {
    const { name, country } = req.body;

    if (!name || !country) {
        return res.status(400).json({ error: "Name and country required" });
    }

    const newAuthor = {
        id: authors.length + 1,
        name,
        country
    };

    authors.push(newAuthor);

    res.status(201).json(newAuthor);
});
app.put("/authors/:id", (req, res) => {
    const author = authors.find(a => a.id == req.params.id);

    if (!author) {
        return res.status(404).json({ error: "Author not found" });
    }

    const { name, country } = req.body;

    if (name) author.name = name;
    if (country) author.country = country;

    res.json(author);
});
app.delete("/authors/:id", (req, res) => {
    const index = authors.findIndex(a => a.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "Author not found" });
    }

    const deleted = authors.splice(index, 1);

    res.json({ message: "Author deleted", deleted });
});
app.get("/books", validateYear, (req, res) => {
    let result = books;

    const { author, year, page = 1, limit = 5 } = req.query;

    if (author) {
        result = result.filter(book =>
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    if (year) {
        result = result.filter(book =>
            book.year == year
        );
    }

    const pageNum = Number(page);
    const limitNum = Number(limit);

    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;

    const paginatedResult = result.slice(startIndex, endIndex);

    res.json({
        total: result.length,
        page: pageNum,
        limit: limitNum,
        data: paginatedResult
    });
});
app.get("/books/search", (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.status(400).json({ error: "Search title is required" });
    }

    const results = books.filter(book =>
        book.title.toLowerCase().includes(title.toLowerCase())
    );

    res.json({
        total: results.length,
        results
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});