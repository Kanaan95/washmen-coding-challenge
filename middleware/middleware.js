/**
 * Middleware file
 */

const url = require("url");

module.exports = (req, res, next) => {
  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Add the query string in the req for API to use it
  req.data = queryStringObject;
  req.data.sortBy = queryStringObject.sortBy;

  // Log incoming request parameters for debugging
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} query=${JSON.stringify(queryStringObject)}`);

  next();
};
