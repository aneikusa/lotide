// console.assert(1 === 1); // => nothing happens because true/
// console.assert(1 === 1.1); // => prints out "Assertion failed" to the terminal

// FUNCTION IMPLEMENTATION
const sum = function (a, b) {
  return a + b;
}

// TEST CODE
//console.assert(sum(1,2) === 3); --> pass
//console.assert(sum(1,20) === 3); --> fail

const sumBuggy = function (a, b) {
  return a * b;
}

// TEST CODE
//console.assert(sumBuggy(1,2) === 3); ---> fail

const assertEqual = function(a,b) {
  return a = b;
} if {(assertEqual)}

console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
