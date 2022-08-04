// const assertEqual = function(actual, expected) {
//   actual === expected;
//   if (actual === expected) {
//     console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`📛📛📛 Assertion Failed: ${actual} !== ${expected}`);
//   }
// }; --> In this case using assertEqual function will always fail because we're comparing two objects

// The function should take in a sentence (as a string)
// then return a count of each of the letters in that sentence

const countLetters = function(string) {
  const results = {};

  for (const letter of string) {
    if (letter !== " ")
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }
  return results;

};

console.log(countLetters("l h l"));