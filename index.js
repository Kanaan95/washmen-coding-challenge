/**
 * Main server file
 *
 */

// Dependencies
const express = require("express");
const config = require("./config/config");
const middleware = require("./middleware/middleware");
const app = express();

// Init middleware
app.use(express.json({ extended: true }));
app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Routing
app.use("/api/partners", require("./routes/api/partners"));

const server = app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

// export modules (for testing)
module.exports = server;
