const assert = require("assert");
const run = require("./../lib/supplicant-psk");

describe("Running with 0 or 1 arg", () => {
  it("returns false", () => {
    assert.equal(run(), "Wrong number of arguments");
    assert.ok(run("ssid"), "Wrong number of arguments");
  });
});

describe("Running with 2 args", () => {
  it("returns true", () => {
    assert.ok(run("ssid", "plaintextpassword"));
  });
});
