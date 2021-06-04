/**
 * Helpers functions test
 *
 */

// Dependencies
const { expect } = require("chai");
const _helpers = require("../lib/helpers");

describe("Parse Json to Object", () => {
  it("should return a json object from string", (done) => {
    const jsonObj = {'message': 'it works'};
    const parsed = _helpers.parseJsonToObject('{"message": "it works"}');
    expect(parsed).to.eql(jsonObj)
    done();
  });
});

describe("Great Circle Distance", () => {
  it("should return distance of 2141km (rounded to the nearest integer) between Beirut Airport and Dubai Airport", (done) => {
    // Beirut Airport coordinates are 33.824510922509724, 35.49057788062818 (Google Maps)
    const BEY = { lat: 33.824510922509724, long: 35.49057788062818 };

    // Dubai Aiport coordinates are 25.253242391140375, 55.36574790307244 (Google Maps)
    const DXB = { lat: 25.253242391140375, long: 55.36574790307244 };

    // Calculate the Great Circle distance between BEY & DXB
    const distance = _helpers.getGreatCircleDist(BEY, DXB);

    expect(distance).to.approximately(2141, 1);
    done();
  });
});
