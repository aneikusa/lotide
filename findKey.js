const assertEqual = function(actual, expected) {
  actual === expected;
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`📛📛📛 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};


//EXAMPLE

const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const test2 = findKey({
  "Kate Bush": {track: 1},
  "Lady Gaga": {track: 2},
  "MF DOOM": {track: 3},
}, (x) => x.track === 2) // => "Lady Gaga"

assertEqual(test, "noma"); // PASS
assertEqual(test2, "MF DOOM"); // FAIL

module.exports = findKey