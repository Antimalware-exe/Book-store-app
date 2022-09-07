import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      height={500}
    >
      <Typography variant="h5">
        Welcome to the book store. Here you can view the books available to buy
        and read.
      </Typography>
      <Button
        LinkComponent={Link}
        to="/books"
        sx={{ marginTop: 5}}
        variant="contained"
      >
        <Typography variant="h6">View All Books</Typography>
      </Button>
    </Box>
  );
};

export default Home;
