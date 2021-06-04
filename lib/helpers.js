/**
 * Helpers for various tasks
 *
 */

// Create container for all the helpers
const helpers = {};

/**
 * Parse string to JSON
 * @param {string} str
 * */
helpers.parseJsonToObject = (str) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (err) {
    return {};
  }
};

/**
 * Calculate the great-circle distance between two points – that is, the shortest distance over the earth’s surface
 * @param {object} P1
 * @param {object} P2
 * @param {string} unit
 */
helpers.getGreatCircleDist = (P1, P2, unit) => {
  // Check if params are passed as objects
  P1 = typeof P1 == "object" ? P1 : false;
  P2 = typeof P2 == "object" ? P2 : false;

  if (P1 && P2) {
    // Earth's radius is around 6,371km
    const radius = unit == "m" ? 6371e3 : 6371;

    // Convert the latitudes to radians
    const phi1 = (P1.lat * Math.PI) / 180;
    const phi2 = (P2.lat * Math.PI) / 180;

    // Calculate the latitudes and longitudes absolute differences in radians
    const deltaPhi = ((P2.lat - P1.lat) * Math.PI) / 180;
    const deltaLambda = ((P2.long - P1.long) * Math.PI) / 180;

    // a is the square of half the chord length between the points
    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) *
        Math.cos(phi2) *
        Math.sin(deltaLambda / 2) *
        Math.sin(deltaLambda / 2);

    // c is the angular distance in radians
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Calculate the distance between P1 & P2 in meters
    const d = radius * c;

    return d;
  } else {
    return null;
  }
};

module.exports = helpers;
