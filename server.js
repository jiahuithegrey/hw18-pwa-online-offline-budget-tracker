const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user:password7@ds125841.mlab.com:25841/heroku_dxmk3vsz",
  {
    useMongoClient: true
  });

// Requiring our models for syncing
// const db = require("./models");

// routes here
app.use(require("./routes/api-routes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});