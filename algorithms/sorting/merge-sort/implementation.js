/**
 * Merge Sort Algorithm
 *
 * Efficient divide-and-conquer sorting with guaranteed O(n log n) performance
 *
 * Time: O(n log n) all cases
 * Space: O(n) auxiliary space
 * Stable: Yes
 */


/**
 * Standard recursive merge sort (functional style)
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - New sorted array
 *
 * @example
 * mergeSort([38, 27, 43, 3, 9, 82, 10])
 * // [3, 9, 10, 27, 38, 43, 82]
 */
function mergeSort(arr) {
    // Base case: arrays of 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide: split array in half
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquer: recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combine: merge the sorted halves
    return merge(sortedLeft, sortedRight);
}


/**
 * Merge two sorted arrays into one sorted array
 *
 * @param {number[]} left - First sorted array
 * @param {number[]} right - Second sorted array
 * @returns {number[]} - Merged sorted array
 */
function merge(left, right) {
    const result = [];
    let i = 0;  // Left array pointer
    let j = 0;  // Right array pointer

    // Compare elements from left and right, add smaller to result
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {  // <= ensures stability
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Copy any remaining elements from left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Copy any remaining elements from right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}


/**
 * In-place merge sort (modifies original array)
 *
 * @param {number[]} arr - Array to sort
 * @param {number} left - Left boundary (default 0)
 * @param {number} right - Right boundary (default arr.length - 1)
 * @returns {number[]} - The same array, sorted
 */
function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }

    const mid = Math.floor((left + right) / 2);

    // Sort left and right halves
    mergeSortInPlace(arr, left, mid);
    mergeSortInPlace(arr, mid + 1, right);

    // Merge the sorted halves
    mergeInPlace(arr, left, mid, right);

    return arr;
}


/**
 * Merge two sorted sections of an array in-place
 *
 * @param {number[]} arr - The array
 * @param {number} left - Start of left section
 * @param {number} mid - End of left section
 * @param {number} right - End of right section
 */
function mergeInPlace(arr, left, mid, right) {
    // Create temporary arrays
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0;           // Index for leftArr
    let j = 0;           // Index for rightArr
    let k = left;        // Index for main array

    // Merge back into main array
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}


/**
 * Bottom-up iterative merge sort (avoids recursion)
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - New sorted array
 */
function mergeSortIterative(arr) {
    if (arr.length <= 1) return arr;

    let result = [...arr];  // Work with a copy
    const n = result.length;

    // Start with size 1, double each iteration
    for (let size = 1; size < n; size *= 2) {
        // Merge subarrays of current size
        for (let start = 0; start < n; start += 2 * size) {
            const mid = Math.min(start + size - 1, n - 1);
            const end = Math.min(start + 2 * size - 1, n - 1);

            if (mid < end) {
                // Merge arr[start...mid] with arr[mid+1...end]
                const left = result.slice(start, mid + 1);
                const right = result.slice(mid + 1, end + 1);
                const merged = merge(left, right);

                // Copy back
                for (let i = 0; i < merged.length; i++) {
                    result[start + i] = merged[i];
                }
            }
        }
    }

    return result;
}


/**
 * Optimized merge sort with insertion sort for small arrays
 *
 * @param {number[]} arr - Array to sort
 * @param {number} threshold - Size threshold for insertion sort (default 10)
 * @returns {number[]} - New sorted array
 */
function mergeSortOptimized(arr, threshold = 10) {
    // Use insertion sort for small arrays
    if (arr.length <= threshold) {
        return insertionSort([...arr]);
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortOptimized(arr.slice(0, mid), threshold);
    const right = mergeSortOptimized(arr.slice(mid), threshold);

    // Optimization: if already sorted, just concatenate
    if (left[left.length - 1] <= right[0]) {
        return left.concat(right);
    }

    return merge(left, right);
}


/**
 * Simple insertion sort for small arrays
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - Sorted array
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
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
 * Merge sort with custom comparator
 *
 * @param {Array} arr - Array to sort
 * @param {Function} compareFn - Comparison function (a, b) => number
 * @returns {Array} - New sorted array
 */
function mergeSortComparator(arr, compareFn = (a, b) => a - b) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortComparator(arr.slice(0, mid), compareFn);
    const right = mergeSortComparator(arr.slice(mid), compareFn);

    return mergeWithComparator(left, right, compareFn);
}


/**
 * Merge with custom comparator
 *
 * @param {Array} left - First sorted array
 * @param {Array} right - Second sorted array
 * @param {Function} compareFn - Comparison function
 * @returns {Array} - Merged sorted array
 */
function mergeWithComparator(left, right, compareFn) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (compareFn(left[i], right[j]) <= 0) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}


/**
 * Merge sort that returns steps for visualization
 *
 * @param {number[]} arr - Array to sort
 * @returns {Object} - { result, steps }
 */
function mergeSortWithSteps(arr) {
    const steps = [];

    function mergeSortRecursive(array, offset = 0) {
        steps.push({
            type: 'divide',
            array: [...array],
            offset: offset,
            description: `Dividing array of length ${array.length}`
        });

        if (array.length <= 1) {
            return array;
        }

        const mid = Math.floor(array.length / 2);
        const left = mergeSortRecursive(array.slice(0, mid), offset);
        const right = mergeSortRecursive(array.slice(mid), offset + mid);

        const merged = mergeWithSteps(left, right, offset);

        steps.push({
            type: 'merge',
            array: merged,
            offset: offset,
            description: `Merged into array of length ${merged.length}`
        });

        return merged;
    }

    function mergeWithSteps(left, right, offset) {
        const result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    const result = mergeSortRecursive(arr);

    return { result, steps };
}


// Example usage
if (require.main === module) {
    console.log('=== Merge Sort Examples ===\n');

    const arr1 = [38, 27, 43, 3, 9, 82, 10];
    console.log('Original:', arr1);
    console.log('Sorted:  ', mergeSort(arr1));

    console.log('\n--- In-Place Version ---');
    const arr2 = [64, 34, 25, 12, 22, 11, 90];
    console.log('Before:', arr2);
    mergeSortInPlace(arr2);
    console.log('After: ', arr2);

    console.log('\n--- Iterative Version ---');
    const arr3 = [5, 2, 8, 1, 9, 3, 7];
    console.log('Iterative:', mergeSortIterative(arr3));

    console.log('\n--- Optimized Version ---');
    const arr4 = [8, 3, 1, 7, 0, 10, 2, 4, 6, 5];
    console.log('Optimized:', mergeSortOptimized(arr4));

    console.log('\n--- Custom Comparator (Descending) ---');
    const arr5 = [5, 2, 8, 1, 9];
    console.log('Descending:', mergeSortComparator(arr5, (a, b) => b - a));

    console.log('\n--- Objects by Property ---');
    const people = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
    ];
    const sortedByAge = mergeSortComparator(people, (a, b) => a.age - b.age);
    console.log('By age:', sortedByAge.map(p => `${p.name}(${p.age})`).join(', '));
}


// Export for use in other files
module.exports = {
    mergeSort,
    merge,
    mergeSortInPlace,
    mergeSortIterative,
    mergeSortOptimized,
    mergeSortComparator,
    mergeSortWithSteps
};
