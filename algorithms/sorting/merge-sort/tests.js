/**
 * Merge Sort - Test Suite
 */

const {
    mergeSort,
    merge,
    mergeSortInPlace,
    mergeSortIterative,
    mergeSortOptimized,
    mergeSortComparator
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

console.log('=== Merge Sort Tests ===\n');

// Test 1: Basic Merge Sort
console.log('Basic Merge Sort:');

const test1 = mergeSort([38, 27, 43, 3, 9, 82, 10]);
assert(arraysEqual(test1, [3, 9, 10, 27, 38, 43, 82]), 'Basic sort');

const test2 = mergeSort([5, 2, 8, 1, 9]);
assert(arraysEqual(test2, [1, 2, 5, 8, 9]), 'Another basic sort');

const test3 = mergeSort([1]);
assert(arraysEqual(test3, [1]), 'Single element');

const test4 = mergeSort([]);
assert(arraysEqual(test4, []), 'Empty array');

const test5 = mergeSort([5, 5, 5, 5]);
assert(arraysEqual(test5, [5, 5, 5, 5]), 'All same elements');

const test6 = mergeSort([1, 2, 3, 4, 5]);
assert(arraysEqual(test6, [1, 2, 3, 4, 5]), 'Already sorted');

const test7 = mergeSort([5, 4, 3, 2, 1]);
assert(arraysEqual(test7, [1, 2, 3, 4, 5]), 'Reverse sorted');

const test8 = mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
assert(arraysEqual(test8, [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]), 'With duplicates');

const test9 = mergeSort([-5, 3, -1, 7, 0, -3, 2]);
assert(arraysEqual(test9, [-5, -3, -1, 0, 2, 3, 7]), 'Negative numbers');

const test10 = mergeSort([100, 50, 25, 75, 12, 88]);
assert(arraysEqual(test10, [12, 25, 50, 75, 88, 100]), 'Different range');

// Test 2: Merge Function
console.log('\nMerge Function:');

const merge1 = merge([1, 3, 5], [2, 4, 6]);
assert(arraysEqual(merge1, [1, 2, 3, 4, 5, 6]), 'Merge two sorted arrays');

const merge2 = merge([1], [2]);
assert(arraysEqual(merge2, [1, 2]), 'Merge single elements');

const merge3 = merge([], [1, 2, 3]);
assert(arraysEqual(merge3, [1, 2, 3]), 'Merge with empty left');

const merge4 = merge([1, 2, 3], []);
assert(arraysEqual(merge4, [1, 2, 3]), 'Merge with empty right');

const merge5 = merge([1, 5, 9], [2, 3, 4]);
assert(arraysEqual(merge5, [1, 2, 3, 4, 5, 9]), 'Merge overlapping ranges');

// Test 3: In-Place Merge Sort
console.log('\nIn-Place Merge Sort:');

const test11 = [38, 27, 43, 3, 9, 82, 10];
mergeSortInPlace(test11);
assert(arraysEqual(test11, [3, 9, 10, 27, 38, 43, 82]), 'In-place basic sort');

const test12 = [5, 2, 8, 1, 9];
mergeSortInPlace(test12);
assert(arraysEqual(test12, [1, 2, 5, 8, 9]), 'In-place another sort');

const test13 = [1];
mergeSortInPlace(test13);
assert(arraysEqual(test13, [1]), 'In-place single element');

const test14 = [];
mergeSortInPlace(test14);
assert(arraysEqual(test14, []), 'In-place empty array');

const test15 = [5, 4, 3, 2, 1];
mergeSortInPlace(test15);
assert(arraysEqual(test15, [1, 2, 3, 4, 5]), 'In-place reverse sorted');

// Test 4: Iterative Merge Sort
console.log('\nIterative Merge Sort:');

const test16 = mergeSortIterative([5, 2, 8, 1, 9, 3, 7]);
assert(arraysEqual(test16, [1, 2, 3, 5, 7, 8, 9]), 'Iterative basic sort');

const test17 = mergeSortIterative([1, 2, 3]);
assert(arraysEqual(test17, [1, 2, 3]), 'Iterative already sorted');

const test18 = mergeSortIterative([3, 2, 1]);
assert(arraysEqual(test18, [1, 2, 3]), 'Iterative reverse sorted');

const test19 = mergeSortIterative([1]);
assert(arraysEqual(test19, [1]), 'Iterative single element');

const test20 = mergeSortIterative([]);
assert(arraysEqual(test20, []), 'Iterative empty array');

const test21 = mergeSortIterative([3, 1, 4, 1, 5, 9]);
assert(arraysEqual(test21, [1, 1, 3, 4, 5, 9]), 'Iterative with duplicates');

// Test 5: Optimized Merge Sort
console.log('\nOptimized Merge Sort:');

const test22 = mergeSortOptimized([8, 3, 1, 7, 0, 10, 2, 4, 6, 5]);
assert(arraysEqual(test22, [0, 1, 2, 3, 4, 5, 6, 7, 8, 10]), 'Optimized basic sort');

const test23 = mergeSortOptimized([5, 4, 3, 2, 1]);
assert(arraysEqual(test23, [1, 2, 3, 4, 5]), 'Optimized reverse sorted');

const test24 = mergeSortOptimized([1, 2, 3, 4, 5]);
assert(arraysEqual(test24, [1, 2, 3, 4, 5]), 'Optimized already sorted');

const test25 = mergeSortOptimized([3, 1, 4, 1, 5]);
assert(arraysEqual(test25, [1, 1, 3, 4, 5]), 'Optimized with duplicates');

// Test 6: Custom Comparator
console.log('\nCustom Comparator:');

const test26 = mergeSortComparator([5, 2, 8, 1, 9], (a, b) => b - a);
assert(arraysEqual(test26, [9, 8, 5, 2, 1]), 'Descending order');

const test27 = mergeSortComparator([5, 2, 8, 1, 9], (a, b) => a - b);
assert(arraysEqual(test27, [1, 2, 5, 8, 9]), 'Ascending order (explicit)');

const objects = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
const sortedByAge = mergeSortComparator(objects, (a, b) => a.age - b.age);
assert(sortedByAge[0].age === 25 && sortedByAge[2].age === 35, 'Sort objects by age');

const sortedByName = mergeSortComparator(objects, (a, b) => a.name.localeCompare(b.name));
assert(sortedByName[0].name === 'Alice' && sortedByName[2].name === 'Charlie', 'Sort objects by name');

// Test 7: Two Elements
console.log('\nTwo Element Arrays:');

const test28 = mergeSort([2, 1]);
assert(arraysEqual(test28, [1, 2]), 'Two elements unsorted');

const test29 = mergeSort([1, 2]);
assert(arraysEqual(test29, [1, 2]), 'Two elements sorted');

const test30 = mergeSort([5, 5]);
assert(arraysEqual(test30, [5, 5]), 'Two equal elements');

// Test 8: Three Elements
console.log('\nThree Element Arrays:');

const test31 = mergeSort([3, 1, 2]);
assert(arraysEqual(test31, [1, 2, 3]), 'Three elements');

const test32 = mergeSort([1, 3, 2]);
assert(arraysEqual(test32, [1, 2, 3]), 'Three elements variant 2');

const test33 = mergeSort([2, 3, 1]);
assert(arraysEqual(test33, [1, 2, 3]), 'Three elements variant 3');

// Test 9: Large Arrays
console.log('\nLarge Arrays:');

const test34 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const sorted34 = [...test34].sort((a, b) => a - b);
const result34 = mergeSort(test34);
assert(arraysEqual(result34, sorted34), 'Large random array (100 elements)');

const test35 = Array.from({ length: 100 }, (_, i) => 100 - i);
const sorted35 = Array.from({ length: 100 }, (_, i) => i + 1);
const result35 = mergeSort(test35);
assert(arraysEqual(result35, sorted35), 'Large reverse sorted (100 elements)');

const test36 = Array.from({ length: 100 }, () => 42);
const result36 = mergeSort(test36);
assert(result36.every(x => x === 42), 'Large array all same (100 elements)');

const test37 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
const sorted37 = [...test37].sort((a, b) => a - b);
const result37 = mergeSortIterative(test37);
assert(arraysEqual(result37, sorted37), 'Large iterative (50 elements)');

const test38 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
const sorted38 = [...test38].sort((a, b) => a - b);
mergeSortInPlace(test38);
assert(arraysEqual(test38, sorted38), 'Large in-place (50 elements)');

// Test 10: Special Values
console.log('\nSpecial Values:');

const test39 = mergeSort([0, 0, 0]);
assert(arraysEqual(test39, [0, 0, 0]), 'All zeros');

const test40 = mergeSort([-1, -2, -3, -4, -5]);
assert(arraysEqual(test40, [-5, -4, -3, -2, -1]), 'All negative');

const test41 = mergeSort([100, -100, 50, -50, 0]);
assert(arraysEqual(test41, [-100, -50, 0, 50, 100]), 'Mixed positive and negative');

const test42 = mergeSort([1, 1, 2, 2, 3, 3]);
assert(arraysEqual(test42, [1, 1, 2, 2, 3, 3]), 'Pairs of duplicates');

// Test 11: Stability Test
console.log('\nStability Test:');

const items = [
    { value: 3, id: 1 },
    { value: 1, id: 2 },
    { value: 3, id: 3 },
    { value: 2, id: 4 }
];
const stableSorted = mergeSortComparator(items, (a, b) => a.value - b.value);
assert(
    stableSorted[2].value === 3 && stableSorted[2].id === 1 &&
    stableSorted[3].value === 3 && stableSorted[3].id === 3,
    'Stable sort preserves order of equal elements'
);

// Test 12: Verify Original Array Unchanged (Functional)
console.log('\nFunctional Style:');

const original = [5, 2, 8, 1, 9];
const sorted = mergeSort(original);
assert(arraysEqual(original, [5, 2, 8, 1, 9]), 'Original array unchanged (functional)');
assert(arraysEqual(sorted, [1, 2, 5, 8, 9]), 'Sorted result correct');
assert(sorted !== original, 'Returns new array');

const original2 = [3, 1, 2];
const sorted2 = mergeSortIterative(original2);
assert(arraysEqual(original2, [3, 1, 2]), 'Original unchanged (iterative)');
assert(sorted2 !== original2, 'Iterative returns new array');

// Test 13: In-Place Modifies Original
console.log('\nIn-Place Modification:');

const test43 = [5, 2, 8, 1];
const ref43 = test43;
mergeSortInPlace(test43);
assert(test43 === ref43, 'In-place modifies same reference');
assert(arraysEqual(test43, [1, 2, 5, 8]), 'Array correctly sorted in-place');

// Test 14: Stress Tests
console.log('\nStress Tests:');

let stressPassed = 0;
for (let i = 0; i < 20; i++) {
    const length = Math.floor(Math.random() * 30) + 1;
    const testArr = Array.from({ length }, () => Math.floor(Math.random() * 100));
    const expected = [...testArr].sort((a, b) => a - b);
    const result = mergeSort(testArr);
    if (arraysEqual(result, expected)) {
        stressPassed++;
    }
}
assert(stressPassed === 20, `Random stress tests (${stressPassed}/20 passed)`);

let stressInPlace = 0;
for (let i = 0; i < 20; i++) {
    const length = Math.floor(Math.random() * 30) + 1;
    const testArr = Array.from({ length }, () => Math.floor(Math.random() * 100));
    const expected = [...testArr].sort((a, b) => a - b);
    mergeSortInPlace(testArr);
    if (arraysEqual(testArr, expected)) {
        stressInPlace++;
    }
}
assert(stressInPlace === 20, `In-place stress tests (${stressInPlace}/20 passed)`);

let stressIterative = 0;
for (let i = 0; i < 20; i++) {
    const length = Math.floor(Math.random() * 30) + 1;
    const testArr = Array.from({ length }, () => Math.floor(Math.random() * 100));
    const expected = [...testArr].sort((a, b) => a - b);
    const result = mergeSortIterative(testArr);
    if (arraysEqual(result, expected)) {
        stressIterative++;
    }
}
assert(stressIterative === 20, `Iterative stress tests (${stressIterative}/20 passed)`);

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
