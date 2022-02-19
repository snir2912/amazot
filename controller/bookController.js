const Book = require("../models/book");

const insertBooks = (name, publishDate, author, isInStock) => {
  return new Promise((resolve, reject) => {
    const book = new Book({
      name,
      publishDate,
      author,
      isInStock,
    });
    book.save((err, bookData) => {
      bookData ? resolve(bookData) : reject(err);
    });
  });
};

const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    let findBooks = Book.find((err, books) => {
      findBooks = new Book();
      books ? resolve(books) : reject(err);
    });
  });
};

const getBookById = (bookId, name, publishDate, author, isInStock) => {
  return new Promise((resolve, reject) => {
    Book.findById(
      {
        _id: bookId,
      },
      {
        $set: {
          name,
          publishDate,
          author,
          isInStock,
        },
      },
      (err, bookId) => {
        bookId ? resolve(bookId) : reject(err);
      }
    );
  });
};

const findByIdAndUpdate = () => {
  return new Promise((resolve, reject) => {
    Book.findByIdAndUpdate({
      _id,
      updateBook,
    })
      .then((bookIdAndUpdate) => resolve(bookIdAndUpdate))
      .catch((err) => reject(err));
  });
};

const findBooksByIdAndDelete = () => {
  return new Promise((resolve, reject) => {
    let idBooks = req.params.id; // {id: '61edb8a52ede740c1dadd6b2'}
    Book.deleteOne({
      _id: idBooks,
    })
      .then((bookIdDelete) => resolve(bookIdDelete))
      .catch((err) => reject(err));
  });
};

module.exports = {
  insertBooks,
  getAllBooks,
  getBookById,
  findByIdAndUpdate,
  findBooksByIdAndDelete,
};
