const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; //modify our function to use the util library's inspect function
  if (eqObjects(object1,object2)) {
    console.log(`😁😁😁 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`📛📛📛 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({ a: { y: {c:2}, z: 1 }, b: 2 }, { a: { y:{c:2}, z: 1 }, b: 2 }); //=>true

module.exports = assertObjectsEqual;