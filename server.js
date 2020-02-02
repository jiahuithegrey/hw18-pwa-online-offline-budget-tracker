const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
const PORT = process.env.MOGODB_URI || 4000;

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Requiring our models for syncing
// const db = require("./models");

// routes here
app.use(require("./routes/api-routes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});