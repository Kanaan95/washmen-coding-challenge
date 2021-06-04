/**
 * Main server file
 *
 */

// Dependencies
const express = require("express");
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
