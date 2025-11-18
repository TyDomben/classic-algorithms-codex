/**
 * Bubble Sort - Test Suite
 */

const {
  bubbleSort,
  bubbleSortOptimized,
  bubbleSortDescending,
  bubbleSortCustom
} = require('./implementation');

// Test counter
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

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log('=== Bubble Sort Tests ===\n');

// Test 1: Basic sorting
console.log('Basic Functionality:');
let arr1 = [5, 2, 8, 1, 9];
bubbleSort(arr1);
assert(arraysEqual(arr1, [1, 2, 5, 8, 9]), 'Sort basic array');

// Test 2: Already sorted
let arr2 = [1, 2, 3, 4, 5];
bubbleSort(arr2);
assert(arraysEqual(arr2, [1, 2, 3, 4, 5]), 'Handle already sorted array');

// Test 3: Reverse sorted
let arr3 = [5, 4, 3, 2, 1];
bubbleSort(arr3);
assert(arraysEqual(arr3, [1, 2, 3, 4, 5]), 'Sort reverse sorted array');

// Test 4: Single element
let arr4 = [42];
bubbleSort(arr4);
assert(arraysEqual(arr4, [42]), 'Handle single element');

// Test 5: Empty array
let arr5 = [];
bubbleSort(arr5);
assert(arraysEqual(arr5, []), 'Handle empty array');

// Test 6: Two elements
let arr6 = [2, 1];
bubbleSort(arr6);
assert(arraysEqual(arr6, [1, 2]), 'Sort two elements');

// Test 7: Duplicates
let arr7 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
bubbleSort(arr7);
assert(arraysEqual(arr7, [1, 1, 2, 3, 4, 5, 5, 6, 9]), 'Handle duplicates');

// Test 8: All same elements
let arr8 = [5, 5, 5, 5];
bubbleSort(arr8);
assert(arraysEqual(arr8, [5, 5, 5, 5]), 'Handle all same elements');

// Test 9: Negative numbers
let arr9 = [3, -1, 4, -5, 2];
bubbleSort(arr9);
assert(arraysEqual(arr9, [-5, -1, 2, 3, 4]), 'Sort with negative numbers');

console.log('\nOptimized Version:');
// Test 10: Optimized - already sorted
let arr10 = [1, 2, 3, 4, 5];
bubbleSortOptimized(arr10);
assert(arraysEqual(arr10, [1, 2, 3, 4, 5]), 'Optimized: already sorted');

// Test 11: Optimized - nearly sorted
let arr11 = [1, 2, 4, 3, 5];
bubbleSortOptimized(arr11);
assert(arraysEqual(arr11, [1, 2, 3, 4, 5]), 'Optimized: nearly sorted');

console.log('\nDescending Order:');
// Test 12: Descending sort
let arr12 = [5, 2, 8, 1, 9];
bubbleSortDescending(arr12);
assert(arraysEqual(arr12, [9, 8, 5, 2, 1]), 'Sort in descending order');

console.log('\nCustom Comparator:');
// Test 13: Sort by absolute value
let arr13 = [-5, 2, -8, 1, 9];
bubbleSortCustom(arr13, (a, b) => Math.abs(a) - Math.abs(b));
assert(arraysEqual(arr13, [1, 2, -5, -8, 9]), 'Custom: sort by absolute value');

// Test 14: Sort objects
let arr14 = [
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 }
];
bubbleSortCustom(arr14, (a, b) => a.age - b.age);
assert(
  arr14[0].age === 25 && arr14[1].age === 30 && arr14[2].age === 35,
  'Custom: sort objects by property'
);

console.log('\nEdge Cases:');
// Test 15: Large numbers
let arr15 = [1000000, 1, 999999, 2];
bubbleSort(arr15);
assert(arraysEqual(arr15, [1, 2, 999999, 1000000]), 'Handle large numbers');

// Test 16: Floating point numbers
let arr16 = [3.14, 2.71, 1.41, 1.73];
bubbleSort(arr16);
assert(arraysEqual(arr16, [1.41, 1.73, 2.71, 3.14]), 'Handle floating point numbers');

// Test 17: Very small array (stress test)
for (let i = 0; i < 100; i++) {
  let arr = [Math.random(), Math.random()];
  let sorted = [...arr].sort((a, b) => a - b);
  bubbleSort(arr);
  assert(arraysEqual(arr, sorted), `Random two-element array ${i + 1}`);
}

// Print summary
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
