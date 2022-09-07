import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import AddBooks from "./components/books/AddBook";
import Books from "./components/books/Books";
import BookDetail from "./components/books/BookDetail";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBooks />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
