/**
 * Health Check - Check that your app is running at a glance without digging into code
 *
 */

// Dependencies
const express = require("express");
const router = express.Router({});

/**
 * @route           GET /api/healthCheck
 * @description     Check that your app is running at a glance without digging into code
 * @access          Public
 */
router.get("/", async (req, res) => {
  const health = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.status(200).send(health);
  } catch (err) {
    health.message = err;
    res.status(503).send();
    process.exit(1);
  }
});

// Export module
module.exports = router;
