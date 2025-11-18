/**
 * Quick Sort - Test Suite
 */

const {
    quickSort,
    quickSortRandomized,
    quickSort3Way
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
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log('=== Quick Sort Tests ===\n');

// Test 1: Basic Quick Sort
console.log('Basic Quick Sort:');

const test1 = [8, 3, 1, 7, 0, 10, 2];
quickSort(test1);
assert(arraysEqual(test1, [0, 1, 2, 3, 7, 8, 10]), 'Basic sort');

const test2 = [5, 2, 8, 1, 9];
quickSort(test2);
assert(arraysEqual(test2, [1, 2, 5, 8, 9]), 'Another basic sort');

const test3 = [1];
quickSort(test3);
assert(arraysEqual(test3, [1]), 'Single element');

const test4 = [];
quickSort(test4);
assert(arraysEqual(test4, []), 'Empty array');

const test5 = [5, 5, 5, 5];
quickSort(test5);
assert(arraysEqual(test5, [5, 5, 5, 5]), 'All same elements');

const test6 = [1, 2, 3, 4, 5];
quickSort(test6);
assert(arraysEqual(test6, [1, 2, 3, 4, 5]), 'Already sorted');

const test7 = [5, 4, 3, 2, 1];
quickSort(test7);
assert(arraysEqual(test7, [1, 2, 3, 4, 5]), 'Reverse sorted');

const test8 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
quickSort(test8);
assert(arraysEqual(test8, [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]), 'With duplicates');

const test9 = [-5, 3, -1, 7, 0, -3, 2];
quickSort(test9);
assert(arraysEqual(test9, [-5, -3, -1, 0, 2, 3, 7]), 'Negative numbers');

const test10 = [100, 50, 25, 75, 12, 88];
quickSort(test10);
assert(arraysEqual(test10, [12, 25, 50, 75, 88, 100]), 'Different range');

// Test 2: Two elements
console.log('\nTwo Element Arrays:');

const test11 = [2, 1];
quickSort(test11);
assert(arraysEqual(test11, [1, 2]), 'Two elements unsorted');

const test12 = [1, 2];
quickSort(test12);
assert(arraysEqual(test12, [1, 2]), 'Two elements sorted');

const test13 = [5, 5];
quickSort(test13);
assert(arraysEqual(test13, [5, 5]), 'Two equal elements');

// Test 3: Three elements (various orderings)
console.log('\nThree Element Arrays:');

const test14 = [3, 1, 2];
quickSort(test14);
assert(arraysEqual(test14, [1, 2, 3]), 'Three elements');

const test15 = [1, 3, 2];
quickSort(test15);
assert(arraysEqual(test15, [1, 2, 3]), 'Three elements variant 2');

const test16 = [2, 3, 1];
quickSort(test16);
assert(arraysEqual(test16, [1, 2, 3]), 'Three elements variant 3');

// Test 4: Randomized Quick Sort
console.log('\nRandomized Quick Sort:');

const test17 = [8, 3, 1, 7, 0, 10, 2];
const result17 = quickSortRandomized(test17);
assert(arraysEqual(result17, [0, 1, 2, 3, 7, 8, 10]), 'Randomized basic sort');

const test18 = [5, 2, 8, 1, 9];
const result18 = quickSortRandomized(test18);
assert(arraysEqual(result18, [1, 2, 5, 8, 9]), 'Randomized another sort');

const test19 = [1];
const result19 = quickSortRandomized(test19);
assert(arraysEqual(result19, [1]), 'Randomized single element');

const test20 = [];
const result20 = quickSortRandomized(test20);
assert(arraysEqual(test20, []), 'Randomized empty array');

const test21 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const result21 = quickSortRandomized(test21);
assert(arraysEqual(result21, [1, 1, 2, 3, 4, 5, 5, 6, 9]), 'Randomized with duplicates');

const test22 = [5, 4, 3, 2, 1];
const result22 = quickSortRandomized(test22);
assert(arraysEqual(result22, [1, 2, 3, 4, 5]), 'Randomized reverse sorted');

const test23 = [-10, 5, -3, 8, 0, -1];
const result23 = quickSortRandomized(test23);
assert(arraysEqual(result23, [-10, -3, -1, 0, 5, 8]), 'Randomized negative numbers');

// Test 5: 3-Way Partitioning
console.log('\n3-Way Partitioning:');

const test24 = [4, 2, 6, 2, 8, 2, 4];
quickSort3Way(test24);
assert(arraysEqual(test24, [2, 2, 2, 4, 4, 6, 8]), '3-way with duplicates');

const test25 = [8, 3, 1, 7, 0, 10, 2];
quickSort3Way(test25);
assert(arraysEqual(test25, [0, 1, 2, 3, 7, 8, 10]), '3-way basic sort');

const test26 = [5, 5, 5, 5, 5];
quickSort3Way(test26);
assert(arraysEqual(test26, [5, 5, 5, 5, 5]), '3-way all same');

const test27 = [1];
quickSort3Way(test27);
assert(arraysEqual(test27, [1]), '3-way single element');

const test28 = [];
quickSort3Way(test28);
assert(arraysEqual(test28, []), '3-way empty array');

const test29 = [3, 3, 1, 3, 2, 3, 3];
quickSort3Way(test29);
assert(arraysEqual(test29, [1, 2, 3, 3, 3, 3, 3]), '3-way many duplicates of pivot');

const test30 = [9, 5, 5, 5, 1, 5, 5];
quickSort3Way(test30);
assert(arraysEqual(test30, [1, 5, 5, 5, 5, 5, 9]), '3-way mostly same values');

// Test 6: Large arrays
console.log('\nLarge Arrays:');

const test31 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const sorted31 = [...test31].sort((a, b) => a - b);
quickSort(test31);
assert(arraysEqual(test31, sorted31), 'Large random array (100 elements)');

const test32 = Array.from({ length: 100 }, (_, i) => 100 - i);
const sorted32 = Array.from({ length: 100 }, (_, i) => i + 1);
quickSort(test32);
assert(arraysEqual(test32, sorted32), 'Large reverse sorted (100 elements)');

const test33 = Array.from({ length: 100 }, () => 42);
quickSort(test33);
assert(test33.every(x => x === 42), 'Large array all same (100 elements)');

const test34 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
const sorted34 = [...test34].sort((a, b) => a - b);
const result34 = quickSortRandomized(test34);
assert(arraysEqual(result34, sorted34), 'Large randomized quick sort (50 elements)');

const test35 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10));
const sorted35 = [...test35].sort((a, b) => a - b);
quickSort3Way(test35);
assert(arraysEqual(test35, sorted35), 'Large array with many duplicates (50 elements)');

// Test 7: Edge cases with special values
console.log('\nSpecial Edge Cases:');

const test36 = [0, 0, 0];
quickSort(test36);
assert(arraysEqual(test36, [0, 0, 0]), 'All zeros');

const test37 = [-1, -2, -3, -4, -5];
quickSort(test37);
assert(arraysEqual(test37, [-5, -4, -3, -2, -1]), 'All negative');

const test38 = [100, -100, 50, -50, 0];
quickSort(test38);
assert(arraysEqual(test38, [-100, -50, 0, 50, 100]), 'Mixed positive and negative');

const test39 = [1, 1, 2, 2, 3, 3];
quickSort(test39);
assert(arraysEqual(test39, [1, 1, 2, 2, 3, 3]), 'Pairs of duplicates');

const test40 = [2, 1, 2, 1, 2, 1];
quickSort(test40);
assert(arraysEqual(test40, [1, 1, 1, 2, 2, 2]), 'Alternating values');

// Test 8: Verify original array is modified (in-place)
console.log('\nIn-Place Modification:');

const test41 = [5, 2, 8, 1];
const ref41 = test41;
quickSort(test41);
assert(test41 === ref41, 'Sorts in-place (same reference)');
assert(arraysEqual(test41, [1, 2, 5, 8]), 'Array correctly sorted in-place');

const test42 = [3, 1, 2];
const ref42 = test42;
quickSort3Way(test42);
assert(test42 === ref42, '3-way sorts in-place (same reference)');
assert(arraysEqual(test42, [1, 2, 3]), '3-way correctly sorted in-place');

// Test 9: Verify randomized creates new array
console.log('\nFunctional Style (Randomized):');

const test43 = [5, 2, 8, 1];
const result43 = quickSortRandomized(test43);
assert(result43 !== test43, 'Randomized creates new array');
assert(arraysEqual(result43, [1, 2, 5, 8]), 'Randomized result is correct');
assert(arraysEqual(test43, [5, 2, 8, 1]), 'Randomized original unchanged');

// Test 10: Stress test with random arrays
console.log('\nStress Tests:');

let stressTestsPassed = 0;
for (let i = 0; i < 20; i++) {
    const length = Math.floor(Math.random() * 30) + 1;
    const testArr = Array.from({ length }, () => Math.floor(Math.random() * 100));
    const expected = [...testArr].sort((a, b) => a - b);
    quickSort(testArr);
    if (arraysEqual(testArr, expected)) {
        stressTestsPassed++;
    }
}
assert(stressTestsPassed === 20, `Random stress tests (${stressTestsPassed}/20 passed)`);

let stressTests3Way = 0;
for (let i = 0; i < 20; i++) {
    const length = Math.floor(Math.random() * 30) + 1;
    const testArr = Array.from({ length }, () => Math.floor(Math.random() * 10)); // More duplicates
    const expected = [...testArr].sort((a, b) => a - b);
    quickSort3Way(testArr);
    if (arraysEqual(testArr, expected)) {
        stressTests3Way++;
    }
}
assert(stressTests3Way === 20, `3-way random stress tests (${stressTests3Way}/20 passed)`);

let stressTestsRandomized = 0;
for (let i = 0; i < 20; i++) {
    const length = Math.floor(Math.random() * 30) + 1;
    const testArr = Array.from({ length }, () => Math.floor(Math.random() * 100));
    const expected = [...testArr].sort((a, b) => a - b);
    const result = quickSortRandomized(testArr);
    if (arraysEqual(result, expected)) {
        stressTestsRandomized++;
    }
}
assert(stressTestsRandomized === 20, `Randomized stress tests (${stressTestsRandomized}/20 passed)`);

// Summary
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
