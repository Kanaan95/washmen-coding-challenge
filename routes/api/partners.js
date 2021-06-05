/**
 * API Routing - PARTNERS
 *
 */

// Dependencies
const express = require("express");
const router = express.Router();
const _data = require("../../lib/data");
const _helpers = require("../../lib/helpers");
const middleware = require("../../middleware/middleware");

/**
 * @route           GET api/partners
 * @description     Get the list of all partners
 * @access          Public
 */
router.get("/", (req, res) => {
  _data.read("partners", "partners", (err, data) => {
    // If there is no error and there is data
    if (!err && data) {
      res.status(200).json(data);
    } else {
      res.status(404).json(err);
    }
  });
});

/**
 * @route             GET api/partners/search?distance=d&units=u
 * @description       Returns the list of partners that have offices within the distance given
 * @access            Public
 */
router.get("/search", (req, res) => {
  // Starbucks Cafe Central London Coordinates
  const lat = 51.5144636;
  const long = -0.142571;

  // Deconstruct the query params
  const { distance, units } = req.data;

  if (distance && units) {
    // Read the data from partners
    _data.read("partners", "partners", (err, data) => {
      // If data file is found
      if (!err && data) {
        // Filter the partners that are within the giving distance received from the query params
        const nearPartners = data.filter((partner) => {
          // Get the office(s) of the partner
          const offices =
            typeof partner.offices == "object" &&
            partner.offices instanceof Array &&
            partner.offices.length > 0
              ? partner.offices
              : false;

          // If partners has 1 or more offices
          if (offices) {
            // Get the office(s) that are within the given distance
            const nearOffices = offices.filter((office) => {
              // Split the coordinates from the data response (lat,long)
              const coordinates = office.coordinates.split(",");
              // Convert them to numbers
              const lat1 = Number(coordinates[0]);
              const long1 = Number(coordinates[1]);

              // Calculate the Great Circle Distance between the Starbucks and the office location
              const d = _helpers.getGreatCircleDist(
                { lat, long },
                { lat: lat1, long: long1 },
                units
              );

              // Compare distance
              // If given range from Starbucks is greater than the distance between Starbucks and the office location, return the office obj with the partner data
              if (Number(distance) >= d) {
                office["distance"] = Math.round(d);
                return true;
              }
            });

            if (
              typeof nearOffices == "object" &&
              nearOffices instanceof Array &&
              nearOffices.length > 0
            ) {
              partner.offices = nearOffices;
              return true;
            }
          }
          return null;
        });

        res.status(200).send(nearPartners);
      } else {
        // Server error: data file not found
        res.status(500).send(err);
      }
    });
  } else {
    res.status(403).send({ error: "Invalid request. Missing required fields" });
  }
});

/**
 * @route           GET api/partners
 * @description     Get partner
 * @access          Public
 */
router.get("/:id", (req, res) => {
  _data.read("partners", "partners", (err, data) => {
    // If there is no error and there is data
    if (!err && data) {
      // Find partner with the corresponding id
      const partner = data.find((p) => p.id === +req.params.id);

      // If the partner is found, return it to the client side
      if (partner) {
        res.status(200).send(partner);
      } else {
        // If partner not found
        res.status(404).send({ error: "Partner not found or does not exist" });
      }
    } else {
      // Server error: data file not found
      res.status(500).send(err);
    }
  });
});

module.exports = router;
