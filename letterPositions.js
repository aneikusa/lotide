const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;