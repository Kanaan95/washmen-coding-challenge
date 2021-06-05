/**
 * Health Check - Testing
 *
 */

// Dependencies
const { expect } = require("chai");
const request = require("supertest");
const server = require("../index");

describe("Health Check", () => {
  it("returns 200 if server is healthy", async () => {
    const res = await request(server).get("/health");

    expect(res.statusCode).to.equal(200);
  });

  after(() => {
    server.close();
  });
});
