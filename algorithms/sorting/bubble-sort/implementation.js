/**
 * Bubble Sort Algorithm
 *
 * A simple comparison-based sorting algorithm that repeatedly steps through
 * the list, compares adjacent elements, and swaps them if they're in the
 * wrong order. The pass through the list is repeated until no swaps are needed.
 *
 * Time Complexity:
 *   - Best Case: O(n) - when array is already sorted
 *   - Average Case: O(n²)
 *   - Worst Case: O(n²) - when array is reverse sorted
 *
 * Space Complexity: O(1) - in-place sorting algorithm
 *
 * @param {number[]} arr - Array of numbers to sort
 * @return {number[]} - Sorted array (modifies in place)
 */
function bubbleSort(arr) {
  // Edge case: empty or single element array
  if (arr.length <= 1) {
    return arr;
  }

  const n = arr.length;

  // Outer loop: controls number of passes
  // After each pass, the largest element in the unsorted portion
  // bubbles to its correct position at the end
  for (let i = 0; i < n - 1; i++) {
    // Inner loop: compares adjacent elements
    // Range decreases by 1 each pass because last i elements are sorted
    for (let j = 0; j < n - i - 1; j++) {
      // If current element is greater than next, swap them
      if (arr[j] > arr[j + 1]) {
        // Swap using destructuring assignment (ES6)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

/**
 * Optimized Bubble Sort
 *
 * Adds early exit optimization: if no swaps occur in a pass,
 * the array is already sorted and we can stop early.
 *
 * Time Complexity:
 *   - Best Case: O(n) - significant improvement for nearly sorted data
 *   - Average Case: O(n²)
 *   - Worst Case: O(n²)
 *
 * @param {number[]} arr - Array of numbers to sort
 * @return {number[]} - Sorted array (modifies in place)
 */
function bubbleSortOptimized(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;  // Mark that a swap occurred
      }
    }

    // If no swaps occurred, array is sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

/**
 * Bubble Sort with Step Tracking
 *
 * Returns each step of the sorting process for visualization purposes.
 * Useful for educational tools and animations.
 *
 * @param {number[]} arr - Array of numbers to sort
 * @return {Object[]} - Array of step objects containing array state and metadata
 */
function bubbleSortWithSteps(arr) {
  const steps = [];
  const workingArr = [...arr];  // Create copy to avoid modifying original
  const n = workingArr.length;

  // Initial state
  steps.push({
    array: [...workingArr],
    comparing: [],
    swapped: false,
    description: 'Initial unsorted array'
  });

  for (let i = 0; i < n - 1; i++) {
    let swappedInPass = false;

    for (let j = 0; j < n - i - 1; j++) {
      // Show comparison
      steps.push({
        array: [...workingArr],
        comparing: [j, j + 1],
        swapped: false,
        description: `Pass ${i + 1}: Comparing ${workingArr[j]} and ${workingArr[j + 1]}`
      });

      if (workingArr[j] > workingArr[j + 1]) {
        // Perform swap
        [workingArr[j], workingArr[j + 1]] = [workingArr[j + 1], workingArr[j]];
        swappedInPass = true;

        // Show swap result
        steps.push({
          array: [...workingArr],
          comparing: [j, j + 1],
          swapped: true,
          description: `Swapped ${workingArr[j + 1]} and ${workingArr[j]}`
        });
      }
    }

    // Mark end of pass
    steps.push({
      array: [...workingArr],
      comparing: [],
      swapped: false,
      description: `Pass ${i + 1} complete. Position ${n - i - 1} is now sorted.`
    });

    if (!swappedInPass) {
      steps.push({
        array: [...workingArr],
        comparing: [],
        swapped: false,
        description: 'No swaps occurred - array is sorted!'
      });
      break;
    }
  }

  // Final state
  steps.push({
    array: [...workingArr],
    comparing: [],
    swapped: false,
    description: 'Sorting complete!'
  });

  return steps;
}

/**
 * Bubble Sort (Descending Order)
 *
 * @param {number[]} arr - Array of numbers to sort
 * @return {number[]} - Array sorted in descending order
 */
function bubbleSortDescending(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      // Changed condition to > for descending order
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

/**
 * Bubble Sort with Custom Comparator
 *
 * @param {Array} arr - Array to sort
 * @param {Function} compareFn - Comparison function (a, b) => boolean
 * @return {Array} - Sorted array
 */
function bubbleSortCustom(arr, compareFn) {
  if (arr.length <= 1) {
    return arr;
  }

  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      // Use custom comparison function
      if (compareFn(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    bubbleSort,
    bubbleSortOptimized,
    bubbleSortWithSteps,
    bubbleSortDescending,
    bubbleSortCustom
  };
}

// Example usage and demonstrations
if (typeof require !== 'undefined' && require.main === module) {
  console.log('=== Bubble Sort Examples ===\n');

  // Example 1: Basic sorting
  console.log('Example 1: Basic Bubble Sort');
  const arr1 = [64, 34, 25, 12, 22, 11, 90];
  console.log('Before:', arr1);
  bubbleSort(arr1);
  console.log('After:', arr1);
  console.log();

  // Example 2: Optimized version with nearly sorted array
  console.log('Example 2: Optimized Bubble Sort (Nearly Sorted)');
  const arr2 = [1, 2, 3, 5, 4, 6, 7];
  console.log('Before:', arr2);
  bubbleSortOptimized(arr2);
  console.log('After:', arr2);
  console.log();

  // Example 3: Descending order
  console.log('Example 3: Descending Order');
  const arr3 = [5, 2, 8, 1, 9];
  console.log('Before:', arr3);
  bubbleSortDescending(arr3);
  console.log('After:', arr3);
  console.log();

  // Example 4: Custom comparator (sort by absolute value)
  console.log('Example 4: Custom Comparator (by absolute value)');
  const arr4 = [-5, 2, -8, 1, 9];
  console.log('Before:', arr4);
  bubbleSortCustom(arr4, (a, b) => Math.abs(a) - Math.abs(b));
  console.log('After:', arr4);
  console.log();

  // Example 5: Sorting objects
  console.log('Example 5: Sorting Objects by Age');
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  console.log('Before:', people);
  bubbleSortCustom(people, (a, b) => a.age - b.age);
  console.log('After:', people);
  console.log();

  // Performance comparison
  console.log('=== Performance Comparison ===');
  const sizes = [10, 100, 1000];

  sizes.forEach(size => {
    // Generate random array
    const randomArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 1000)
    );

    // Test regular bubble sort
    const arr1 = [...randomArr];
    const start1 = Date.now();
    bubbleSort(arr1);
    const time1 = Date.now() - start1;

    // Test optimized bubble sort
    const arr2 = [...randomArr];
    const start2 = Date.now();
    bubbleSortOptimized(arr2);
    const time2 = Date.now() - start2;

    console.log(`Size ${size}:`);
    console.log(`  Regular: ${time1}ms`);
    console.log(`  Optimized: ${time2}ms`);
  });
}
