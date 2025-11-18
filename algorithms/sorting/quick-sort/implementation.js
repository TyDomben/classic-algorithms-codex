/**
 * Quick Sort Algorithm
 *
 * Efficient divide-and-conquer sorting using partitioning
 *
 * Time: O(n log n) average, O(n²) worst
 * Space: O(log n) average
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

// Randomized version
function quickSortRandomized(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  const left = arr.filter((x, i) => i !== pivotIndex && x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter((x, i) => i !== pivotIndex && x > pivot);

  return [...quickSortRandomized(left), ...middle, ...quickSortRandomized(right)];
}

// Three-way partitioning (handles duplicates)
function quickSort3Way(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  let lt = left, gt = right;
  const pivot = arr[left];
  let i = left;

  while (i <= gt) {
    if (arr[i] < pivot) {
      [arr[lt], arr[i]] = [arr[i], arr[lt]];
      lt++;
      i++;
    } else if (arr[i] > pivot) {
      [arr[i], arr[gt]] = [arr[gt], arr[i]];
      gt--;
    } else {
      i++;
    }
  }

  quickSort3Way(arr, left, lt - 1);
  quickSort3Way(arr, gt + 1, right);
  return arr;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quickSort, quickSortRandomized, quickSort3Way };
}

if (typeof require !== 'undefined' && require.main === module) {
  console.log('=== Quick Sort Examples ===\n');

  const arr1 = [8, 3, 1, 7, 0, 10, 2];
  console.log('Before:', arr1);
  quickSort(arr1);
  console.log('After:', arr1);

  const arr2 = [5, 2, 8, 1, 9, 3, 7, 4, 6];
  console.log('\nRandomized:');
  console.log(quickSortRandomized(arr2));

  const arr3 = [4, 2, 6, 2, 8, 2, 4];
  console.log('\n3-Way (duplicates):');
  quickSort3Way(arr3);
  console.log(arr3);
}
