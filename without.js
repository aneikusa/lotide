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

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

const without = function(source,itemsToRemove) {
  let arrSource = source;
  for (let i = 0; i < arrSource.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arrSource[i] === itemsToRemove[j]) {
        arrSource.splice(i,1);
      }
    }
  }
  return arrSource;
};



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);