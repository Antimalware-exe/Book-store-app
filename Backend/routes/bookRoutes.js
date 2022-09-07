const express = require("express");
const router = express.Router();
const Book = require("../model/Books");

router.get("/", (req, res, next) => {
  let books;
  try{
    books = await Book.find(); // no arg in find will return all books
  }catch(error){
    console.log(error);
  }

  if(!books){
    return res.status(404).json({message: "No books found"})
  }
  return res.status(200).json({books});
});
