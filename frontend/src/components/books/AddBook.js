import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendReq = async (payload) => {
    await axios
      .post("http://localhost:5000/books", payload)
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendReq({
      name: String(data.name),
      author: String(data.author),
      description: String(data.description),
      price: Number(data.price),
      availability: Boolean(checked),
    }).then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={500}
        alignContent="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={2}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={data.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={data.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={data.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={data.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button type="submit" variant="contained">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
