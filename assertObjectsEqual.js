const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key in obj1Keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } 
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect; //modify our function to use the util library's inspect function
  if (eqObjects(object1,object2)) {
    console.log(`😁😁😁 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`📛📛📛 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({ a: { y: {c:2}, z: 1 }, b: 2 }, { a: { y:{c:2}, z: 1 }, b: 2 }); //=>true