const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Initialize env variables
dotenv.config();

const port = process.env.PORT || 3000;

// Connect to DB and start server
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    app.listen(port, () => {
      console.log(`Connected to DB and server is running on port ${port}.`)
    })
  }
)
