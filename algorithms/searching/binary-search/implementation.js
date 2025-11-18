/**
 * Binary Search Algorithm
 *
 * Efficient O(log n) search in sorted arrays
 *
 * @param {number[]} arr - Sorted array
 * @param {number} target - Value to find
 * @return {number} - Index of target, or -1 if not found
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Avoid integer overflow
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;  // Found!
    } else if (arr[mid] < target) {
      left = mid + 1;  // Search right half
    } else {
      right = mid - 1;  // Search left half
    }
  }

  return -1;  // Not found
}

/**
 * Binary Search (Recursive)
 */
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;  // Base case: not found
  }

  const mid = left + Math.floor((right - left) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

/**
 * Find first occurrence (lower bound)
 */
function binarySearchFirst(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;  // Continue searching left
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

/**
 * Find last occurrence (upper bound)
 */
function binarySearchLast(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;  // Continue searching right
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    binarySearch,
    binarySearchRecursive,
    binarySearchFirst,
    binarySearchLast
  };
}

// Examples
if (typeof require !== 'undefined' && require.main === module) {
  console.log('=== Binary Search Examples ===\n');

  const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  console.log('Array:', arr);
  console.log('Find 7:', binarySearch(arr, 7));          // 3
  console.log('Find 1:', binarySearch(arr, 1));          // 0
  console.log('Find 19:', binarySearch(arr, 19));        // 9
  console.log('Find 4 (not there):', binarySearch(arr, 4));  // -1

  // With duplicates
  const arr2 = [1, 2, 2, 2, 3, 4, 5];
  console.log('\nArray with duplicates:', arr2);
  console.log('First occurrence of 2:', binarySearchFirst(arr2, 2));  // 1
  console.log('Last occurrence of 2:', binarySearchLast(arr2, 2));    // 3
}
