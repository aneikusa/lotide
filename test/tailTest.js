const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] when passed ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(
      tail([1, 2, 3, 4, 5, 6, 7, 8]).toString(),
      "2,3,4,5,6,7,8"
    );
  });
});