const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const Constants = require("./Constants");
const app = express();
var cors = require("cors");
app.use(cors());

// app.use("/", (req, res, next) => {
//   res.send("This is the starting app");
// });
app.use(express.json());
app.use("/books", router); //localhost:5000/books

mongoose
  .connect(Constants.__MongoTOKEN__) // create Constants.js file having token value
  .then(() => console.log("connected to DB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
