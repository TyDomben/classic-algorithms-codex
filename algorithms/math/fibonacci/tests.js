/**
 * Fibonacci - Test Suite
 */

const {
  fibonacci,
  fibonacciNaive,
  fibonacciMemo,
  fibonacciTabulation,
  fibonacciSequence
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

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log('=== Fibonacci Tests ===\n');

// Expected values
const expected = {
  0: 0,
  1: 1,
  2: 1,
  3: 2,
  4: 3,
  5: 5,
  6: 8,
  7: 13,
  8: 21,
  9: 34,
  10: 55,
  15: 610,
  20: 6765,
  30: 832040
};

console.log('Basic Cases:');
assert(fibonacci(0) === 0, 'F(0) = 0');
assert(fibonacci(1) === 1, 'F(1) = 1');
assert(fibonacci(2) === 1, 'F(2) = 1');
assert(fibonacci(3) === 2, 'F(3) = 2');

console.log('\nSmall Numbers:');
for (let i = 0; i <= 10; i++) {
  assert(fibonacci(i) === expected[i], `F(${i}) = ${expected[i]}`);
}

console.log('\nLarger Numbers:');
assert(fibonacci(15) === expected[15], 'F(15) = 610');
assert(fibonacci(20) === expected[20], 'F(20) = 6765');
assert(fibonacci(30) === expected[30], 'F(30) = 832040');

console.log('\nNaive Implementation (small n only):');
assert(fibonacciNaive(0) === 0, 'Naive: F(0) = 0');
assert(fibonacciNaive(1) === 1, 'Naive: F(1) = 1');
assert(fibonacciNaive(10) === 55, 'Naive: F(10) = 55');

console.log('\nMemoization:');
assert(fibonacciMemo(0) === 0, 'Memo: F(0) = 0');
assert(fibonacciMemo(1) === 1, 'Memo: F(1) = 1');
assert(fibonacciMemo(20) === expected[20], 'Memo: F(20) = 6765');
assert(fibonacciMemo(30) === expected[30], 'Memo: F(30) = 832040');

console.log('\nTabulation:');
assert(fibonacciTabulation(0) === 0, 'Tab: F(0) = 0');
assert(fibonacciTabulation(1) === 1, 'Tab: F(1) = 1');
assert(fibonacciTabulation(20) === expected[20], 'Tab: F(20) = 6765');

console.log('\nSequence Generation:');
const seq10 = fibonacciSequence(10);
const expectedSeq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
assert(arraysEqual(seq10, expectedSeq), 'First 10 Fibonacci numbers');
assert(fibonacciSequence(0).length === 0, 'Empty sequence');
assert(fibonacciSequence(1).length === 1, 'Single element sequence');

console.log('\nAll Implementations Agree:');
for (let i = 0; i <= 20; i++) {
  const opt = fibonacci(i);
  const memo = fibonacciMemo(i);
  const tab = fibonacciTabulation(i);
  assert(opt === memo && memo === tab, `All agree on F(${i})`);
}

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
