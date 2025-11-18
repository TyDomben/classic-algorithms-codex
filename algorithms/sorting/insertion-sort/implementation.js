/**
 * Insertion Sort Algorithm
 *
 * Simple, efficient sorting for small datasets and nearly sorted data
 *
 * Time: O(n) best, O(n²) average/worst
 * Space: O(1) in-place
 * Stable: Yes
 */


/**
 * Standard insertion sort
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - The same array, sorted
 *
 * @example
 * insertionSort([5, 2, 4, 6, 1, 3])
 * // [1, 2, 3, 4, 5, 6]
 */
function insertionSort(arr) {
    // Start from second element (first is trivially sorted)
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];  // Element to insert
        let j = i - 1;       // Start from end of sorted portion

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at correct position
        arr[j + 1] = key;
    }

    return arr;
}


/**
 * Insertion sort with custom comparator
 *
 * @param {Array} arr - Array to sort
 * @param {Function} compareFn - Comparison function (a, b) => number
 * @returns {Array} - The same array, sorted
 */
function insertionSortComparator(arr, compareFn = (a, b) => a - b) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && compareFn(arr[j], key) > 0) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}


/**
 * Binary insertion sort - uses binary search to find position
 *
 * Reduces comparisons but still O(n²) due to shifting
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - The same array, sorted
 */
function binaryInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];

        // Find position using binary search
        let left = 0;
        let right = i - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] > key) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // Shift elements to make room
        for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }

        // Insert at correct position
        arr[left] = key;
    }

    return arr;
}


/**
 * Insertion sort that returns steps for visualization
 *
 * @param {number[]} arr - Array to sort
 * @returns {Object} - { result, steps }
 */
function insertionSortWithSteps(arr) {
    const steps = [];
    const workingArray = [...arr];

    // Initial state
    steps.push({
        array: [...workingArray],
        sortedBoundary: 0,
        currentIndex: -1,
        comparing: [],
        description: 'Initial array - first element trivially sorted'
    });

    for (let i = 1; i < workingArray.length; i++) {
        const key = workingArray[i];

        steps.push({
            array: [...workingArray],
            sortedBoundary: i - 1,
            currentIndex: i,
            comparing: [],
            description: `Select element at index ${i}: ${key}`
        });

        let j = i - 1;

        // Find position and shift
        while (j >= 0 && workingArray[j] > key) {
            steps.push({
                array: [...workingArray],
                sortedBoundary: i - 1,
                currentIndex: i,
                comparing: [j, j + 1],
                description: `Compare ${workingArray[j]} > ${key}: shift right`
            });

            workingArray[j + 1] = workingArray[j];
            j--;
        }

        // Insert
        workingArray[j + 1] = key;

        steps.push({
            array: [...workingArray],
            sortedBoundary: i,
            currentIndex: j + 1,
            comparing: [],
            description: `Insert ${key} at position ${j + 1}`
        });
    }

    // Final state
    steps.push({
        array: [...workingArray],
        sortedBoundary: workingArray.length - 1,
        currentIndex: -1,
        comparing: [],
        description: 'Array fully sorted!'
    });

    return { result: workingArray, steps };
}


/**
 * Recursive insertion sort
 *
 * @param {number[]} arr - Array to sort
 * @param {number} n - Number of elements to sort
 * @returns {number[]} - The same array, sorted
 */
function insertionSortRecursive(arr, n = arr.length) {
    // Base case
    if (n <= 1) {
        return arr;
    }

    // Sort first n-1 elements
    insertionSortRecursive(arr, n - 1);

    // Insert last element at correct position
    const key = arr[n - 1];
    let j = n - 2;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;

    return arr;
}


/**
 * Optimized insertion sort with early termination
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - The same array, sorted
 */
function insertionSortOptimized(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];

        // Quick check: if already in position, skip
        if (arr[i - 1] <= key) {
            continue;
        }

        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}


/**
 * Descending insertion sort
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - The same array, sorted in descending order
 */
function insertionSortDescending(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        // Use < instead of > for descending
        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}


// Example usage
if (require.main === module) {
    console.log('=== Insertion Sort Examples ===\n');

    const arr1 = [5, 2, 4, 6, 1, 3];
    console.log('Original:', arr1);
    insertionSort(arr1);
    console.log('Sorted:  ', arr1);

    console.log('\n--- Binary Insertion Sort ---');
    const arr2 = [64, 34, 25, 12, 22, 11, 90];
    console.log('Before:', arr2);
    binaryInsertionSort(arr2);
    console.log('After: ', arr2);

    console.log('\n--- Descending ---');
    const arr3 = [5, 2, 8, 1, 9];
    console.log('Descending:', insertionSortDescending([...arr3]));

    console.log('\n--- Custom Comparator (by absolute value) ---');
    const arr4 = [-5, 2, -8, 1, -9];
    insertionSortComparator(arr4, (a, b) => Math.abs(a) - Math.abs(b));
    console.log('By absolute value:', arr4);

    console.log('\n--- Objects by Property ---');
    const people = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
    ];
    insertionSortComparator(people, (a, b) => a.age - b.age);
    console.log('By age:', people.map(p => `${p.name}(${p.age})`).join(', '));

    console.log('\n--- Recursive ---');
    const arr5 = [3, 1, 4, 1, 5, 9, 2, 6];
    console.log('Recursive:', insertionSortRecursive([...arr5]));

    console.log('\n--- Nearly Sorted (Optimized) ---');
    const arr6 = [1, 2, 3, 5, 4, 6, 7];
    console.log('Before:', arr6);
    insertionSortOptimized(arr6);
    console.log('After: ', arr6);
}


// Export for use in other files
module.exports = {
    insertionSort,
    insertionSortComparator,
    binaryInsertionSort,
    insertionSortWithSteps,
    insertionSortRecursive,
    insertionSortOptimized,
    insertionSortDescending
};
