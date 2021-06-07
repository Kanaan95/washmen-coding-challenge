/**
 * Main server file
 *
 */

// Dependencies
const express = require("express");
const config = require("./config/config");
const middleware = require("./middleware/middleware");
const app = express();
const log = require("morgan");
const fs = require("fs");
const path = require("path");

// create a write stream (in append mode)
const logStream = fs.createWriteStream(
  path.join(__dirname, "./logs/access.log"),
  { flags: "a" }
);

// Init middleware
app.use(express.json({ extended: true }));
app.use(middleware);

/**
 * We have to use express.static to let express know there is a dist folder
 * and assets of the Angular build.
 */
app.use(express.static(process.cwd() + "/client/dist/client/"));

// Init logging
app.use(log("combined", { stream: logStream }));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/dist/client/index.html");
});

// API Routing
app.use("/api/partners", require("./routes/api/partners"));
app.use("/health", require("./healthcheck"));

const server = app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

// export modules (for testing)
module.exports = server;
