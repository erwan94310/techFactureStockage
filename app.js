// Initialize env variables
require('dotenv').config();

// Import modules
const express = require("express");
const mongoose = require('mongoose');

// Initilize application
const app = express();
app.use(express.json());

// Connect to DB and start server
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Connected to DB and server is running on port ${port}.`)
  });
});
