import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Books.css";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data.books);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => {
      setBooks(data);
    });
  }, []);
  // console.log(books);

  return (
    <ul>
      {books &&
        books.map((item, i) => {
          return (
            <li key={i}>
              <Book book={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default Books;
