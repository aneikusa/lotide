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

const middle = function(arr) {
  let midArray = []
  //arr[Math.round(arr.length / 2)];--> earlier assertion failed because it did not include .push prototype to actually recreate new array
  if (arr.length <= 2) {
    return midArray;
  } else if (arr.length % 2 !== 0) {
    midArray.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    midArray.push(arr[(arr.length / 2) - 1], arr[arr.length / 2])
  }
  return midArray
};

//TEST CODE

//For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

//Test with assertArraysEqual function
const fruits = ["blueberries", "apples", "pears"] 
middle(fruits);
assertArraysEqual(middle(fruits),["blueberries", "apples", "pears"]);