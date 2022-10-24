const { createApp } = require("../app");
const request = require("supertest");
const myDataSource = require("../models/db.config");

describe("login", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await myDataSource.initialize();
  });

  afterAll(async () => {
    await myDataSource.destroy();
  });

  test("SUCCESS: user login", async () => {
    await request(app)
      .post("/users/google")
      .send({
        snsId: "test@test.com",
        email: "test@test.com",
        nick: "test1234!",
      })
      .expect(200);
  });
});
