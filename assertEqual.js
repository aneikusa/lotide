const assertEqual = function(actual, expected) {
  actual === expected;
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`📛📛📛 Assertion Failed: ${actual} !== ${expected}`);
  }
};


console.assert(assertEqual('Lighthouse Labs','Bootcamp'));

///console.assert(assertEqual('Lighthouse Labs', 'Bootcamp'))
///