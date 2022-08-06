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

module.exports = middle;
