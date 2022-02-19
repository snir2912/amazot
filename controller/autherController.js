const Author = require("../models/author");

const insertAuthor = (name, adress, phone, isAlive, birthday) => {
  return new Promise((resolve, reject) => {
    const author = new Author({
      name,
      adress,
      phone,
      isAlive,
      birthday,
    });
    author.save((err, authorData) => {
      authorData ? resolve(authorData) : reject(err);
    });
  });
};

const getAllAuthor = () => {
  return new Promise((resolve, reject) => {
    let findAuthor = Author.find((err, authors) => {
      findAuthor = new Author();
      authors ? resolve(authors) : reject(err);
    });
  });
};

const getAuthorById = (authorId, name, adress, phone, isAlive, birthday) => {
  return new Promise((resolve, reject) => {
    Author.findById(
      {
        _id: authorId,
      },
      {
        $set: {
          name,
          adress,
          phone,
          isAlive,
          birthday,
        },
      },
      (err, authorId) => {
        authorId ? resolve(authorId) : reject(err);
      }
    );
  });
};

const findAuthorByIdAndUpdate = () => {
  return new Promise((resolve, reject) => {
    Author.findByIdAndUpdate({
      _id,
      updateAuthor,
    })
      .then((authorIdAndUpdate) => resolve(authorIdAndUpdate))
      .catch((err) => reject(err));
  });
};

const findAuthorByIdAndDelete = () => {
  return new Promise((resolve, reject) => {
    let idAuthor = req.params.id; // {id: '61edb8a52ede740c1dadd6b2'}
    Author.deleteOne({
      _id: idAuthor,
    })
      .then((authorIdDelete) => resolve(authorIdDelete))
      .catch((err) => reject(err));
  });
};

module.exports = {
  insertAuthor,
  getAllAuthor,
  getAuthorById,
  findAuthorByIdAndUpdate,
  findAuthorByIdAndDelete,
};
