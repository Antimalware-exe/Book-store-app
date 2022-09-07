import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

const BookDetail = () => {
  const id = useParams().id;
  const history = useNavigate();
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:5000/books/${id}`).then((res) => {
        setInputs(res.data.book);
        setChecked(res.data.book.availability);
      });
    };

    fetchHandler();
  }, [id]);

  const sendReq = async (payload) => {
    await axios
      .put(`http://localhost:5000/books/${id}`, payload)
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendReq({
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      availability: Boolean(checked),
    }).then(() => history("/books"));
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          }
          label="Available"
        />
        <Button type="submit" variant="contained">
          Update Book
        </Button>
      </Box>
    </form>
  );
};

export default BookDetail;
