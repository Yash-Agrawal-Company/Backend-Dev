import express from "express";
import { validateYear } from "./midd.js";
const app = express();
const PORT = 3000;
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
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});