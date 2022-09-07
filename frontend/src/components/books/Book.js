import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Books.css";

const Book = (props) => {
  const { _id, name, author, description, price } = props.book;
  const history = useNavigate();

  const deleteHandler = () => {
    // const confirmDelete = window.confirm(`Confirm delete '${name}'?`);
    // if (confirmDelete) {
      axios
        .delete(`http://localhost:5000/books/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/books"));
    // }
  };
  return (
    <div className="card">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91Bx8Fqx1pL.jpg"
        alt={name}
      />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>EUR {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default Book;
