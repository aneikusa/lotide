const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns two middle items if the array length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns an empty array [] if the array length is 2 items or less", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("it returns one middle item if the array length is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
});
