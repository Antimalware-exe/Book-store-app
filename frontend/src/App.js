import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import AddBooks from "./components/books/AddBooks";
import Books from "./components/books/Books";
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
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
