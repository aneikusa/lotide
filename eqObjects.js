const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } for (let key in obj1Keys) {
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));//==>false

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); //=> false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

console.log(eqObjects({ a: { y: {c:2}, z: 1 }, b: 2 }, { a: { y:{c:2}, z: 1 }, b: 2 }))//=>true

module.exports = eqObjects;