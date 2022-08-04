const assertEqual = function(actual, expected) {
  actual === expected;
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`📛📛📛 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') i++;
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions('hello lighthouse'));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello lighthouse").e, [1, 15]);
assertArraysEqual(letterPositions("hello lighthouse").h, [1, 8]);