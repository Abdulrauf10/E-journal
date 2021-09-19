const request = require("supertest");
const portal = require ("../server")

describe("get api data", () => {
  it("show all journals", async () => {
    const res = await request(portal).get("/e-journal");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data")
  });
});