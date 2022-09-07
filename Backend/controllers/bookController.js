const Book = require("../model/Books");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find(); // no arg in find will return all books
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, availability } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      availability,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json({ book });
};

const getBookById = async (req, res, next) => {
  let book;
  try {
    book = await Book.findById(req.params.id); // no arg in find will return all books
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
  const { name, author, description, price, availability } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(req.params.id, {
      name,
      author,
      description,
      price,
      availability,
    });
    book = await Book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Could not update book details" });
  }
  return res.status(200).json({ book });
};

const deleteBookById = async (req, res, next) => {
  let book;
  try {
    book = await Book.findByIdAndRemove(req.params.id); // no arg in find will return all books
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "Could not delete the book" });
  }
  return res.status(200).json({ message: "Book deleted successfully" });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBookById = deleteBookById;
