/**
 * Library for storing and editing data
 *
 */

// Dependencies
const fs = require("fs");
const path = require("path");
const https = require("https");
const helpers = require("./helpers");

// Container for the modules (to be exported)
const lib = {};

// Base directory of the data folder
lib.baseDir = path.join(__dirname, "../.data/");

/**
 * Read data from file
 * @param {string} dir
 * @param {string} fileName
 * @param {function} callback
 */
lib.read = (dir, fileName, callback) => {
  fs.readFile(
    lib.baseDir + dir + "/" + fileName + ".json",
    "utf8",
    (err, data) => {
      if (!err && data) {
        const parsedData = helpers.parseJsonToObject(data);
        callback(false, parsedData);
      } else {
        callback(err, data);
      }
    }
  );
};

// Export the module
module.exports = lib;

/**
 * Fetch partner data from an external source URL.
 * Useful for pulling in partner lists from third-party APIs.
 * @param {string} sourceUrl  — fully qualified URL supplied by the caller
 * @param {function} callback
 */
lib.fetchExternal = (sourceUrl, callback) => {
  https.get(sourceUrl, (res) => {
    let body = "";
    res.on("data", (chunk) => { body += chunk; });
    res.on("end", () => {
      const parsed = helpers.parseJsonToObject(body);
      callback(false, parsed);
    });
  }).on("error", (err) => {
    callback(err, null);
  });
};
