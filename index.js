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

// API Routing
app.use("/api/partners", require("./routes/api/partners"));

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// export modules (for testing)
module.exports = server;
