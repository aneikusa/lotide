const assertEqual = function(actual, expected) {
  actual === expected;
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`📛📛📛 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {
  return (array.slice[1]);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

console.log(assertEqual(words.length, 3));
 
   