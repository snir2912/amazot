const express = require("express"),
    app = express();
port = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.static("public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const {
    insertBooks,
    getAllBooks,
    getBookById,
    findByIdAndUpdate,
    findBooksByIdAndDelete,
} = require("./controller/bookController");

const {
    insertAuthor,
    getAllAuthor,
    getAuthorById,
    findAuthorByIdAndUpdate,
    findAuthorByIdAndDelete,
} = require("./controller/autherController");

mongoose
    .connect("mongodb://0.0.0.0:27017/Amazot-snir")
    .then(() => {
        app.listen(port, () => {
            console.info(
                `start server start listening on port http://localhost:${port}`
            );
        });
    })
    .catch((err) => console.error(err));

app.get("/", (req, res) => {
    return res.json({
        hello: "world",
        user: "Matan and Snir",
    });
});

app.post("/insertBooks", (req, res) => {
    const { name, publishDate, author, isInStock } = req.body;
    insertBooks(name, publishDate, author, isInStock)
        .then((books) => res.json(books))
        .catch((err) => res.json(err));
});

app.get("/books", (req, res) => {
    getAllBooks()
        .then((books) => res.json(books))
        .catch((err) => res.json(err));
});

app.get("/books/:bookId", (req, res) => {
    getBookById(req.params.bookId)
        .then((books) => res.json(books))
        .catch((err) => res.json(err));
});

app.put("/books/:bookId", async(req, res) => {
    const { name, publishDate, author, isInStock } = req.body;
    findByIdAndUpdate(req.body, name, publishDate, author, isInStock)
        .then((books) => res.json(books))
        .catch((err) => res.json(err));
});

app.delete("/book/:bookId", (req, res) => {
    findBooksByIdAndDelete()
        .then((bookIdDelete) => res.json(bookIdDelete))
        .catch((err) => res.json(err));
});

app.post("/insertAuthor", (req, res) => {
    const { name, adress, phone, isAlive, birthday } = req.body;
    insertAuthor(req.body, name, adress, phone, isAlive, birthday)
        .then((authors) => res.json(authors))
        .catch((err) => res.json(err));
});

app.get("/author", (req, res) => {
    getAllBooks()
        .then((authors) => res.json(authors))
        .catch((err) => res.json(err));
});

app.get("/author/:authorId", (req, res) => {
    getBookById(req.params.authorId)
        .then((authors) => res.json(authors))
        .catch((err) => res.json(err));
});

app.put("/author/:authorId", async(req, res) => {
    const { name, adress, phone, isAlive, birthday } = req.body;
    findByIdAndUpdate(req.body, name, publishDate, author, isInStock)
        .then((authors) => res.json(authors))
        .catch((err) => res.json(err));
});

app.delete("/author/:authorId", (req, res) => {
    findBooksByIdAndDelete()
        .then((authorIdDelete) => res.json(authorIdDelete))
        .catch((err) => res.json(err));
});