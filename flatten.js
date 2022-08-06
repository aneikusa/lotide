const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`😁😁😁 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`📛📛📛 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function (arr) {
  let arr2 = [];
  
    for(let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for(let j = 0; j < arr[i].length; j++) {
          arr2.push(arr[i][j]);
        }
      }
      else arr2.push(arr[i]);
    }
    return arr2;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;