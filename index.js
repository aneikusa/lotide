// index.js
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require("./countOnly");
const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");
const findKey = require('./findKey');
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const head = require('./head');
const letterPositions = require("./letterPositions");
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  eqArrays,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};