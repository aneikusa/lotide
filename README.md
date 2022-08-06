# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aneikusa/lotide`

**Require it:**

`const _ = require('@aneikusa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(array1, array2)`: Logs "😁😁😁 Assertion Passed" or "📛📛📛 Assertion Failed" when compairing if two arrays are equal
* `assertEqual(actual, expected)`: Logs "😁😁😁 Assertion Passed" or "📛📛📛 Assertion Failed" when compairing an actual versus expected value
* `assertObjectsEqual(object1, object2)`: Logs "😁😁😁 Assertion Passed" or "📛📛📛 Assertion Failed" when compairing if two objects are equal
* `countLetters(string)`: Returns an object with the count of a specific character within a string
* `countOnly(allItems, itemsToCount)`: Returns the count of specific items within a collection
* `eqArrays(array1, array2)`: Checks if array1 is equal to array2
* `eqObjects(object1, object2)`: Checks if object1 is equal to object2
* `findKey(obj, callback)`: Returns the key that meets the criteria specified by the callback function
* `findKeyByValue(obj, value)`: Returns the first key that contains a given value or undefined
* `flatten(array)`: Returns a flattened version of a nested array
* `head(array`: Returns the first element of an array
* `letterPositions(string)`: Returns all the indices in the string where each character is found
* `map(array, callback`: Accepts an array and returns the middle element(s) of the array
* `middle(array)`: Accepts an array and returns the middle element(s) of the array
* `tail(array)`: Returns the tail of an array (all elements besides first one)
* `takeUntil(array, callback)`: Accepts an array and returns the middle element(s) of the array
* `without(source, itemsToRemove)`: Accepts an array and returns the middle element(s) of the array
