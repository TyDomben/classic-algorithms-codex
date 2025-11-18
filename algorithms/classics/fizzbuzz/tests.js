/**
 * FizzBuzz - Test Suite
 */

const { fizzBuzz, fizzBuzzAlt, fizzBuzzExtensible } = require('./implementation');

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

console.log('=== FizzBuzz Tests ===\n');

console.log('Basic Functionality:');
const result15 = fizzBuzz(15);
assert(result15[0] === 1, 'First element is 1');
assert(result15[2] === 'Fizz', '3 is Fizz');
assert(result15[4] === 'Buzz', '5 is Buzz');
assert(result15[14] === 'FizzBuzz', '15 is FizzBuzz');
assert(result15.length === 15, 'Correct length');

console.log('\nMultiples of 3:');
assert(fizzBuzz(3)[2] === 'Fizz', '3 is Fizz');
assert(fizzBuzz(6)[5] === 'Fizz', '6 is Fizz');
assert(fizzBuzz(9)[8] === 'Fizz', '9 is Fizz');

console.log('\nMultiples of 5:');
assert(fizzBuzz(5)[4] === 'Buzz', '5 is Buzz');
assert(fizzBuzz(10)[9] === 'Buzz', '10 is Buzz');

console.log('\nMultiples of both:');
assert(fizzBuzz(15)[14] === 'FizzBuzz', '15 is FizzBuzz');
assert(fizzBuzz(30)[29] === 'FizzBuzz', '30 is FizzBuzz');

console.log('\nAlternative Implementation:');
const resultAlt = fizzBuzzAlt(15);
assert(arraysEqual(result15, resultAlt), 'Alt implementation matches');

console.log('\nExtensible Version:');
const custom = fizzBuzzExtensible(15, [[3, 'Fizz'], [5, 'Buzz'], [7, 'Bazz']]);
assert(custom[6] === 'Bazz', '7 is Bazz');
assert(custom[13] === 'Bazz', '14 is Bazz (7*2)');

console.log('\nEdge Cases:');
assert(fizzBuzz(1).length === 1, 'Single element');
assert(fizzBuzz(1)[0] === 1, 'First element is 1');
assert(fizzBuzz(100).length === 100, 'Length 100');

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
