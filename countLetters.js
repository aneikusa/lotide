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

module.exports = countLetters;