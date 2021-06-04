/**
 * API Routing - PARTNERS
 */

// Dependencies
const express = require("express");
const router = express.Router();

/**
 * @route           GET api/partners
 * @description     Returns message "Get Partners"
 * @access          Public
 */
router.get("/", (req, res) => {
  res.status(200).send("Get Partners works");
});

// export module
module.exports = router;
