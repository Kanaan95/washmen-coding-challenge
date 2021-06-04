/**
 * Partners - Testing
 */

// Dependencies
const request = require("supertest");
const { expect } = require("chai");
const server = require("../index");

describe("Partner testing", () => {
  it('GET /api/partners should return body with "Get Partner Works" ', (done) => {
    request(server)
      .get("/api/partners")
      .expect(200, (err, res) => {
        if (!err && res) {
          expect(res.text).to.equal("Get Partners works");
          done();
        } else {
          done(err);
        }
      });
  });
  after(() => {
    server.close();
  });
});
