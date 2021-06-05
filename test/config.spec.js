/**
 * Configuration - Testing
 *
 */

process.env.NODE_ENV = "production";

// Dependencies
const prodServer = require("../index");
const request = require("supertest");
const config = require("../config/config");
const { expect } = require("chai");

describe("Configuration tests", () => {
  describe("Production environment", () => {
    it("should run on production environment", (done) => {
      request(prodServer)
        .get("/")
        .expect(200, (err, res) => {
          if (!err && res) {
            expect(prodServer.address().port).to.equal(config.port);
            done();
          } else {
            done(err);
          }
        });
    });

    after(() => {
      prodServer.close();
    });
  });
});
