// This function should take in a collection of items
// return counts for a specific subset of those items. 
// It won't count everything. 
// In order to decide what to count, it will also be given an idea of which items we care about
// it will only count those, ignoring the others.
// Items in our case will be limited to Strings.

const assertEqual = require('./assertEqual')

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
const results = {};
for (const item of allItems) {
  if (itemsToCount[item]) {
    if (results[item]) {
      results[item] += 1; 
    } else {
      results[item] = 1;
    }
  }
}
return results;
};

// return a proper report on all strings found in input array + respective counts
// it will need to return an object that can represent the stats.

// TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;