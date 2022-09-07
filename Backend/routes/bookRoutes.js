const express = require("express");
const router = express.Router();
const Book = require("../model/Books");
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);
router.post("/add", bookController.addBook);
router.get("/:id", bookController.getBookById);

module.exports = router;
