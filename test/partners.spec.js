/**
 * Partners - Testing
 */

// Dependencies
const request = require("supertest");
const { expect } = require("chai");
const server = require("../index");
const _data = require("../lib/data");

// Package Partner testing
describe("Partners Testing", () => {
  // Testing the GET api/partners
  describe("Get All Partners", () => {
    it("should return the list of partners", (done) => {
      request(server)
        .get("/api/partners")
        .expect(200, (err, res) => {
          if (!err && res) {
            _data.read("partners", "partners", (err, data) => {
              if (!err && data) {
                expect(res.text).to.equal(JSON.stringify(data));
                done();
              } else {
                done(err);
              }
            });
          } else {
            done(err);
          }
        });
    });
  });

  // Testing the GET api/partners/search
  describe("Get Near Partners", () => {
    it("should return 2 partners within 50 km of range from Starbucks Cafe Central London", (done) => {
      request(server)
        .get("/api/partners/search?distance=50&units=km")
        .expect(200, (err, res) => {
          if (!err && res) {
            expect(res.body.length).to.equal(2);
            done();
          } else {
            done(err);
          }
        });
    });
  });

  // Testing the GET api/partners/id=:id
  describe("Get Partner by ID", () => {
    it("should return only 1 partner when searching by ID", (done) => {
      request(server)
        .get("/api/partners/1")
        .expect(200, (err, res) => {
          if (!err && res) {
            expect([res.body].length).to.equal(1);
            done();
          } else {
            done(err);
          }
        });
    });
  });

  // Testing the GET api/partners/id=:id with a NEGATIVE ID
  describe("Get Partner with NEGATIVE ID", () => {
    it("should return an 404 error", (done) => {
      request(server).get("/api/partners/id=-1").expect(404);
      done();
    });
  });

  after(() => {
    server.close();
  });
});
