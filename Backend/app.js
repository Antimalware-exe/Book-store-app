const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/", (req, res, next) => {
  res.send("This is the starting app");
});

mongoose
  .connect(
    "mongodb+srv://shubham:nSzkyaPazElr4DnS@mern-learn.o6vxdey.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to DB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
