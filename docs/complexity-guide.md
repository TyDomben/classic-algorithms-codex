# Algorithm Complexity Analysis Guide

> Learn how to analyze and understand algorithm efficiency

## Table of Contents
- [Introduction](#introduction)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Analysis Techniques](#analysis-techniques)
- [Common Patterns](#common-patterns)
- [Practice Examples](#practice-examples)

---

## Introduction

Algorithm complexity analysis helps us understand:
1. **How fast** an algorithm runs (time complexity)
2. **How much memory** it uses (space complexity)
3. **How it scales** as input grows

### Why It Matters

```
Small data (n = 100):
- O(n²) algorithm: ~10,000 operations (0.01ms)
- O(n) algorithm: ~100 operations (0.001ms)
Difference: Barely noticeable

Large data (n = 1,000,000):
- O(n²) algorithm: ~1,000,000,000,000 operations (278 hours!)
- O(n) algorithm: ~1,000,000 operations (1ms)
Difference: Critical!
```

---

## Time Complexity

### How to Calculate

1. **Identify basic operations** (comparisons, assignments, arithmetic)
2. **Count how many times** they execute
3. **Express as function** of input size n
4. **Simplify** using Big-O rules

### Example: Linear Search

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {  // Loop runs n times
    if (arr[i] === target) {               // Comparison: 1 operation
      return i;
    }
  }
  return -1;
}
```

**Analysis:**
- Loop runs: n times
- Each iteration: 1 comparison
- Total: n operations
- **Time Complexity: O(n)**

### Example: Nested Loops

```javascript
function findPairs(arr, target) {
  for (let i = 0; i < arr.length; i++) {      // Outer: n times
    for (let j = i + 1; j < arr.length; j++) { // Inner: n-1, n-2, ... 1
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}
```

**Analysis:**
- Outer loop: n times
- Inner loop: (n-1) + (n-2) + ... + 1 = n(n-1)/2
- Total: ~n²/2 operations
- Drop constants: **O(n²)**

---

## Space Complexity

Space complexity measures memory usage beyond the input.

### Components:
1. **Auxiliary space:** Extra memory algorithm uses
2. **Input space:** Memory for input (usually not counted)
3. **Recursion stack:** Memory for recursive calls

### Example: In-Place Algorithm

```javascript
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

**Space Analysis:**
- Variables: left, right (constant)
- No extra arrays
- **Space Complexity: O(1)**

### Example: Recursive Algorithm

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

**Space Analysis:**
- Each call adds to call stack
- Maximum depth: n
- **Space Complexity: O(n)** (call stack)

### Example: Using Extra Array

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

**Space Analysis:**
- Creates new arrays at each level
- **Space Complexity: O(n)** (temporary arrays)

---

## Analysis Techniques

### 1. Count the Operations

**Simple Loop:**
```javascript
for (let i = 0; i < n; i++) {
  // constant work
}
// O(n)
```

**Nested Loops:**
```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // constant work
  }
}
// O(n²)
```

**Half Loop:**
```javascript
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    // constant work
  }
}
// O(n²) - still quadratic, just n(n+1)/2
```

### 2. Analyze Recursion

Use **recurrence relations**:

**Binary Search:**
```
T(n) = T(n/2) + O(1)
T(n) = O(log n)
```

**Merge Sort:**
```
T(n) = 2T(n/2) + O(n)
T(n) = O(n log n)
```

**Fibonacci (naive):**
```
T(n) = T(n-1) + T(n-2) + O(1)
T(n) = O(2ⁿ)
```

### 3. Master Theorem

For recurrences: T(n) = aT(n/b) + f(n)

**Cases:**
1. If f(n) = O(n^c) where c < log_b(a): **T(n) = O(n^log_b(a))**
2. If f(n) = O(n^c) where c = log_b(a): **T(n) = O(n^c log n)**
3. If f(n) = O(n^c) where c > log_b(a): **T(n) = O(f(n))**

---

## Common Patterns

### Pattern 1: Two Pointers

```javascript
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return null;
}
// Time: O(n), Space: O(1)
```

### Pattern 2: Sliding Window

```javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
// Time: O(n), Space: O(1)
```

### Pattern 3: Hash Map for O(1) Lookup

```javascript
function twoSumUnsorted(arr, target) {
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(arr[i], i);
  }
  return null;
}
// Time: O(n), Space: O(n)
```

### Pattern 4: Divide and Conquer

```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// Time: O(log n), Space: O(1)
```

---

## Practice Examples

### Example 1: Analyze This Function

```javascript
function mystery(n) {
  let count = 0;
  for (let i = 1; i < n; i *= 2) {
    count++;
  }
  return count;
}
```

**Analysis:**
- i doubles each iteration: 1, 2, 4, 8, ..., n
- How many doublings to reach n? log₂(n)
- **Answer: O(log n)**

### Example 2: What's the Complexity?

```javascript
function process(arr) {
  arr.sort((a, b) => a - b);  // O(n log n)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {  // O(n)
    sum += arr[i];
  }
  return sum;
}
```

**Analysis:**
- Sort: O(n log n)
- Loop: O(n)
- Total: O(n log n) + O(n) = **O(n log n)**
- (Dominant term wins)

### Example 3: Recursive Complexity

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**Analysis:**
- Each call makes 2 more calls
- Tree depth: n
- Total calls: 2^n
- **Answer: O(2ⁿ)**

### Example 4: With Memoization

```javascript
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
```

**Analysis:**
- Each subproblem solved once
- n subproblems
- **Answer: O(n) time, O(n) space**

---

## Best, Average, and Worst Cases

### Quick Sort Example

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = arr.filter((x, i) => i < arr.length - 1 && x <= pivot);
  const right = arr.filter((x, i) => i < arr.length - 1 && x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

**Cases:**
- **Best:** Pivot splits evenly → **O(n log n)**
- **Average:** Random pivots → **O(n log n)**
- **Worst:** Already sorted, bad pivots → **O(n²)**

---

## Amortized Analysis

Some operations are expensive occasionally but cheap on average.

### Dynamic Array Example

```javascript
class DynamicArray {
  constructor() {
    this.arr = new Array(1);
    this.size = 0;
  }

  push(val) {
    if (this.size === this.arr.length) {
      // Resize: copy all elements (O(n))
      const newArr = new Array(this.arr.length * 2);
      for (let i = 0; i < this.size; i++) {
        newArr[i] = this.arr[i];
      }
      this.arr = newArr;
    }
    this.arr[this.size++] = val;
  }
}
```

**Analysis:**
- Single push: O(1) or O(n) (if resize)
- n pushes: resize at sizes 1, 2, 4, 8, ..., n
- Total copies: 1 + 2 + 4 + ... + n ≈ 2n
- **Amortized: O(1) per push**

---

## Tips for Interviews

1. **State your assumptions:** "Assuming the array is sorted..."
2. **Start with brute force:** Identify naive O(n²) or O(2ⁿ) solution first
3. **Optimize:** Look for patterns, redundant work, better data structures
4. **Analyze as you code:** Don't wait until the end
5. **Consider trade-offs:** Time vs space

### Common Optimizations

| Problem | Slow | Fast | Trick |
|---------|------|------|-------|
| Find in array | O(n) | O(1) | Use hash map |
| Find in sorted | O(n) | O(log n) | Binary search |
| Subarray sum | O(n²) | O(n) | Sliding window |
| Overlapping subproblems | O(2ⁿ) | O(n) | Memoization/DP |

---

## Additional Resources

- [Big-O Cheat Sheet](big-o-cheatsheet.md)
- [Visualizations](../visualizations/index.html)
- [Algorithm Examples](../algorithms/)

---

**Remember:** Understanding complexity is about developing intuition for scalability. Practice analyzing different algorithms until it becomes second nature!
