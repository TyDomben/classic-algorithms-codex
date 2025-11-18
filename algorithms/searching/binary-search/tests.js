/**
 * Binary Search - Test Suite
 */

const {
  binarySearch,
  binarySearchRecursive,
  binarySearchFirst,
  binarySearchLast
} = require('./implementation');

let testsRun = 0;
let testsPassed = 0;

function assert(condition, testName) {
  testsRun++;
  if (condition) {
    testsPassed++;
    console.log(`✓ ${testName}`);
  } else {
    console.log(`✗ ${testName}`);
  }
}

console.log('=== Binary Search Tests ===\n');

// Test data
const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log('Basic Functionality:');
assert(binarySearch(sortedArr, 7) === 3, 'Find middle element');
assert(binarySearch(sortedArr, 1) === 0, 'Find first element');
assert(binarySearch(sortedArr, 19) === 9, 'Find last element');
assert(binarySearch(sortedArr, 4) === -1, 'Element not found');
assert(binarySearch(sortedArr, 0) === -1, 'Element before array');
assert(binarySearch(sortedArr, 20) === -1, 'Element after array');

console.log('\nEdge Cases:');
assert(binarySearch([], 5) === -1, 'Empty array');
assert(binarySearch([1], 1) === 0, 'Single element found');
assert(binarySearch([1], 2) === -1, 'Single element not found');
assert(binarySearch([1, 2], 1) === 0, 'Two elements - find first');
assert(binarySearch([1, 2], 2) === 1, 'Two elements - find second');

console.log('\nRecursive Version:');
assert(binarySearchRecursive(sortedArr, 7) === 3, 'Recursive: find middle');
assert(binarySearchRecursive(sortedArr, 1) === 0, 'Recursive: find first');
assert(binarySearchRecursive(sortedArr, 19) === 9, 'Recursive: find last');
assert(binarySearchRecursive(sortedArr, 4) === -1, 'Recursive: not found');

console.log('\nDuplicates:');
const duplicates = [1, 2, 2, 2, 3, 4, 5];
assert(binarySearchFirst(duplicates, 2) === 1, 'Find first occurrence');
assert(binarySearchLast(duplicates, 2) === 3, 'Find last occurrence');
assert(binarySearchFirst(duplicates, 3) === 4, 'First of single element');
assert(binarySearchLast(duplicates, 3) === 4, 'Last of single element');
assert(binarySearchFirst(duplicates, 6) === -1, 'First of non-existent');
assert(binarySearchLast(duplicates, 6) === -1, 'Last of non-existent');

console.log('\nLarge Arrays:');
const largeArr = Array.from({ length: 10000 }, (_, i) => i * 2);
assert(binarySearch(largeArr, 1000) === 500, 'Large array: find element');
assert(binarySearch(largeArr, 9999) === -1, 'Large array: odd number not found');
assert(binarySearch(largeArr, 0) === 0, 'Large array: first element');
assert(binarySearch(largeArr, 19998) === 9999, 'Large array: last element');

console.log('\n=== Test Summary ===');
console.log(`Total tests: ${testsRun}`);
console.log(`Passed: ${testsPassed}`);
console.log(`Failed: ${testsRun - testsPassed}`);

if (testsPassed === testsRun) {
  console.log('\n✓ All tests passed!');
  process.exit(0);
} else {
  console.log(`\n✗ ${testsRun - testsPassed} test(s) failed`);
  process.exit(1);
}
