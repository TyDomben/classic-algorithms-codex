const {
    insertionSort,
    insertionSortComparator,
    binaryInsertionSort,
    insertionSortRecursive,
    insertionSortOptimized
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

function arraysEqual(a, b) {
    return a.length === b.length && a.every((v, i) => v === b[i]);
}

console.log('=== Insertion Sort Tests ===\n');

// Basic tests
console.log('Basic Insertion Sort:');
const t1 = [5, 2, 4, 6, 1, 3];
insertionSort(t1);
assert(arraysEqual(t1, [1, 2, 3, 4, 5, 6]), 'Basic sort');

const t2 = [1];
insertionSort(t2);
assert(arraysEqual(t2, [1]), 'Single element');

const t3 = [];
insertionSort(t3);
assert(arraysEqual(t3, []), 'Empty array');

const t4 = [1, 2, 3, 4, 5];
insertionSort(t4);
assert(arraysEqual(t4, [1, 2, 3, 4, 5]), 'Already sorted (best case O(n))');

const t5 = [5, 4, 3, 2, 1];
insertionSort(t5);
assert(arraysEqual(t5, [1, 2, 3, 4, 5]), 'Reverse sorted (worst case O(n²))');

const t6 = [3, 3, 3, 3];
insertionSort(t6);
assert(arraysEqual(t6, [3, 3, 3, 3]), 'All same elements');

const t7 = [-5, 3, -1, 7, 0];
insertionSort(t7);
assert(arraysEqual(t7, [-5, -1, 0, 3, 7]), 'Negative numbers');

const t8 = [2, 1];
insertionSort(t8);
assert(arraysEqual(t8, [1, 2]), 'Two elements');

console.log('\nBinary Insertion Sort:');
const t9 = [64, 34, 25, 12, 22];
binaryInsertionSort(t9);
assert(arraysEqual(t9, [12, 22, 25, 34, 64]), 'Binary basic sort');

const t10 = [5, 4, 3, 2, 1];
binaryInsertionSort(t10);
assert(arraysEqual(t10, [1, 2, 3, 4, 5]), 'Binary reverse sorted');

console.log('\nRecursive:');
const t11 = [5, 2, 8, 1, 9];
insertionSortRecursive(t11);
assert(arraysEqual(t11, [1, 2, 5, 8, 9]), 'Recursive sort');

const t12 = [1, 2, 3];
insertionSortRecursive(t12);
assert(arraysEqual(t12, [1, 2, 3]), 'Recursive already sorted');

console.log('\nCustom Comparator:');
const t13 = [5, 2, 8, 1, 9];
insertionSortComparator(t13, (a, b) => b - a);
assert(arraysEqual(t13, [9, 8, 5, 2, 1]), 'Descending order');

const objects = [{ val: 30 }, { val: 25 }, { val: 35 }];
insertionSortComparator(objects, (a, b) => a.val - b.val);
assert(objects[0].val === 25 && objects[2].val === 35, 'Sort objects by property');

console.log('\nOptimized (Nearly Sorted):');
const t14 = [1, 2, 3, 5, 4, 6, 7];
insertionSortOptimized(t14);
assert(arraysEqual(t14, [1, 2, 3, 4, 5, 6, 7]), 'Nearly sorted - early termination');

console.log('\nLarge Arrays:');
const t15 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
const sorted15 = [...t15].sort((a, b) => a - b);
insertionSort(t15);
assert(arraysEqual(t15, sorted15), 'Large random array');

console.log('\nStress Tests:');
let stressPassed = 0;
for (let i = 0; i < 10; i++) {
    const len = Math.floor(Math.random() * 20) + 1;
    const testArr = Array.from({ length: len }, () => Math.floor(Math.random() * 100));
    const expected = [...testArr].sort((a, b) => a - b);
    insertionSort(testArr);
    if (arraysEqual(testArr, expected)) stressPassed++;
}
assert(stressPassed === 10, `Stress tests (${stressPassed}/10 passed)`);

console.log(`\n=== Test Summary ===`);
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
