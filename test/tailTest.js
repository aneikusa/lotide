// assertEqual(words.length, 3);
 
const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

describe("#tail", () => {
  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(assertEqual(words.length, 3));
  });
});
