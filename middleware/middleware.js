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
  next();
};
