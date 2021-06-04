/**
 * Library for storing and editing data
 *
 */

// Dependencies
const fs = require("fs");
const path = require("path");
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
      // If file is found
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
