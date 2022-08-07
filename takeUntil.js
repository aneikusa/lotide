/* FUNCTION WILL
Take in two parameters as well:

1. The array to work with
2. The callback (which Lodash calls "predicate")

*/

const takeUntil = function(array, callback) {
  for (let i in array) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};

//keep collecting items from a provided array 
// until the callback provided returns a truthy value.

// --------
// EXPECTED OUTPUTS

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil;