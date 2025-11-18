# Big-O Complexity Cheat Sheet

> A comprehensive guide to understanding algorithm complexity

## Table of Contents
- [What is Big-O?](#what-is-big-o)
- [Common Complexities](#common-complexities)
- [Complexity Chart](#complexity-chart)
- [Data Structure Operations](#data-structure-operations)
- [Array Sorting Algorithms](#array-sorting-algorithms)
- [Graph Operations](#graph-operations)
- [Quick Reference](#quick-reference)

---

## What is Big-O?

Big-O notation describes the **upper bound** of an algorithm's time or space complexity as the input size grows. It answers the question: "How does the algorithm's resource usage scale?"

### Key Principles:
1. **Drop constants**: O(2n) → O(n)
2. **Drop non-dominant terms**: O(n² + n) → O(n²)
3. **Focus on worst case**: Unless otherwise specified
4. **Different inputs use different variables**: O(a + b), not O(n + n)

---

## Common Complexities

### O(1) - Constant Time
**The Gold Standard**

```javascript
// Examples
function getFirstElement(arr) {
  return arr[0];  // Always 1 operation
}

function hashLookup(map, key) {
  return map[key];  // Hash table lookup
}
```

**Real-world examples:**
- Array access by index
- Hash table lookup
- Stack push/pop
- Queue enqueue/dequeue

**Characteristics:**
- ✅ Best possible complexity
- ✅ Independent of input size
- ✅ Predictable performance

---

### O(log n) - Logarithmic Time
**Excellent Performance**

```javascript
// Binary search
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
```

**Real-world examples:**
- Binary search
- Balanced binary search tree operations
- Binary heap operations
- Finding element in sorted array

**Characteristics:**
- ✅ Very efficient
- ✅ Divides problem in half each iteration
- 📊 1M elements → ~20 operations

**Growth:**
```
n = 10      → ~3 operations
n = 100     → ~7 operations
n = 1,000   → ~10 operations
n = 1,000,000 → ~20 operations
```

---

### O(n) - Linear Time
**Scalable**

```javascript
// Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Sum array
function sum(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}
```

**Real-world examples:**
- Linear search
- Array traversal
- Finding min/max
- Counting occurrences

**Characteristics:**
- ✅ Reasonable for most data sizes
- ⚠️ Performance directly tied to input size
- 📊 1M elements → 1M operations

---

### O(n log n) - Linearithmic Time
**Efficient for Sorting**

```javascript
// Merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

**Real-world examples:**
- Merge sort
- Quick sort (average case)
- Heap sort
- Fast Fourier Transform

**Characteristics:**
- ✅ Best possible for comparison-based sorting
- ✅ Predictable performance
- 📊 1M elements → ~20M operations

---

### O(n²) - Quadratic Time
**Use with Caution**

```javascript
// Bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Finding all pairs
function findAllPairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}
```

**Real-world examples:**
- Bubble sort, Selection sort, Insertion sort
- Nested loops over same data
- Naive string matching
- Checking all pairs

**Characteristics:**
- ⚠️ Slow for large datasets
- ❌ Avoid for production with large n
- 📊 1,000 elements → 1M operations
- 📊 10,000 elements → 100M operations

---

### O(2ⁿ) - Exponential Time
**Impractical for Large Inputs**

```javascript
// Recursive Fibonacci (naive)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Power set
function powerSet(arr) {
  if (arr.length === 0) return [[]];
  const first = arr[0];
  const rest = powerSet(arr.slice(1));
  const withFirst = rest.map(subset => [first, ...subset]);
  return [...rest, ...withFirst];
}
```

**Real-world examples:**
- Recursive Fibonacci (naive)
- Tower of Hanoi
- Power set generation
- Brute force solutions

**Characteristics:**
- ❌ Only viable for small inputs (n < 20)
- ❌ Doubles with each additional element
- 📊 n = 20 → ~1M operations
- 📊 n = 30 → ~1B operations

---

### O(n!) - Factorial Time
**Avoid When Possible**

```javascript
// Generate all permutations
function permutations(arr) {
  if (arr.length === 0) return [[]];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutations(rest);
    for (const perm of perms) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}
```

**Real-world examples:**
- Generating permutations
- Traveling salesman (brute force)
- Solving combinatorial problems

**Characteristics:**
- ❌ Only viable for tiny inputs (n < 10)
- ❌ Fastest growing complexity
- 📊 n = 10 → ~3.6M operations
- 📊 n = 12 → ~479M operations

---

## Complexity Chart

### Performance Comparison

```
Operations for n = 100:

O(1)         = 1
O(log n)     = 7
O(n)         = 100
O(n log n)   = 700
O(n²)        = 10,000
O(2ⁿ)        = 1,267,650,600,228,229,401,496,703,205,376
O(n!)        = 9.3 × 10^157
```

### Visual Growth

```
Time
  ^
  |                                                     O(n!)
  |                                                O(2ⁿ)
  |                                           O(n²)
  |                                  O(n log n)
  |                         O(n)
  |               O(log n)
  |      O(1)
  |__________________|_________________________> Input Size (n)
```

---

## Data Structure Operations

### Array

| Operation     | Average  | Worst Case |
|--------------|----------|------------|
| Access       | O(1)     | O(1)       |
| Search       | O(n)     | O(n)       |
| Insert (end) | O(1)     | O(n)       |
| Insert       | O(n)     | O(n)       |
| Delete       | O(n)     | O(n)       |

### Linked List

| Operation     | Average  | Worst Case |
|--------------|----------|------------|
| Access       | O(n)     | O(n)       |
| Search       | O(n)     | O(n)       |
| Insert (head)| O(1)     | O(1)       |
| Insert       | O(n)     | O(n)       |
| Delete       | O(n)     | O(n)       |

### Hash Table

| Operation     | Average  | Worst Case |
|--------------|----------|------------|
| Search       | O(1)     | O(n)       |
| Insert       | O(1)     | O(n)       |
| Delete       | O(1)     | O(n)       |

### Binary Search Tree

| Operation     | Average     | Worst Case |
|--------------|-------------|------------|
| Search       | O(log n)    | O(n)       |
| Insert       | O(log n)    | O(n)       |
| Delete       | O(log n)    | O(n)       |

### Balanced BST (AVL, Red-Black)

| Operation     | Average     | Worst Case |
|--------------|-------------|------------|
| Search       | O(log n)    | O(log n)   |
| Insert       | O(log n)    | O(log n)   |
| Delete       | O(log n)    | O(log n)   |

### Binary Heap

| Operation     | Average     | Worst Case |
|--------------|-------------|------------|
| Find Min/Max | O(1)        | O(1)       |
| Insert       | O(log n)    | O(log n)   |
| Delete Min   | O(log n)    | O(log n)   |

---

## Array Sorting Algorithms

| Algorithm      | Best        | Average     | Worst       | Space   | Stable |
|---------------|-------------|-------------|-------------|---------|--------|
| Bubble Sort   | O(n)        | O(n²)       | O(n²)       | O(1)    | Yes    |
| Selection Sort| O(n²)       | O(n²)       | O(n²)       | O(1)    | No     |
| Insertion Sort| O(n)        | O(n²)       | O(n²)       | O(1)    | Yes    |
| Merge Sort    | O(n log n)  | O(n log n)  | O(n log n)  | O(n)    | Yes    |
| Quick Sort    | O(n log n)  | O(n log n)  | O(n²)       | O(log n)| No     |
| Heap Sort     | O(n log n)  | O(n log n)  | O(n log n)  | O(1)    | No     |
| Counting Sort | O(n + k)    | O(n + k)    | O(n + k)    | O(k)    | Yes    |
| Radix Sort    | O(nk)       | O(nk)       | O(nk)       | O(n + k)| Yes    |

**Notes:**
- k = range of input values
- Stable = maintains relative order of equal elements

---

## Graph Operations

### Graph Representation

| Representation    | Space   | Add Edge | Remove Edge | Query Edge |
|------------------|---------|----------|-------------|------------|
| Adjacency Matrix | O(V²)   | O(1)     | O(1)        | O(1)       |
| Adjacency List   | O(V + E)| O(1)     | O(E)        | O(V)       |

### Graph Algorithms

| Algorithm            | Time        | Space   |
|---------------------|-------------|---------|
| BFS                 | O(V + E)    | O(V)    |
| DFS                 | O(V + E)    | O(V)    |
| Dijkstra (Binary Heap)| O((V + E) log V) | O(V) |
| Dijkstra (Fibonacci Heap)| O(E + V log V) | O(V) |
| Bellman-Ford        | O(VE)       | O(V)    |
| Floyd-Warshall      | O(V³)       | O(V²)   |
| Prim's MST          | O(E log V)  | O(V)    |
| Kruskal's MST       | O(E log E)  | O(V)    |
| Topological Sort    | O(V + E)    | O(V)    |

**Legend:**
- V = number of vertices
- E = number of edges

---

## Quick Reference

### Rules of Thumb

1. **Accessing data:** O(1) with arrays/hash tables
2. **Searching unsorted:** O(n)
3. **Searching sorted:** O(log n) with binary search
4. **Sorting:** O(n log n) for efficient algorithms
5. **Nested loops:** Multiply complexities (often O(n²))
6. **Divide and conquer:** Often O(log n) or O(n log n)
7. **Recursive with multiple calls:** Often exponential

### Optimization Strategies

| Problem | Instead of | Use | Improvement |
|---------|-----------|-----|-------------|
| Find element in unsorted array | Linear search O(n) | Hash table O(1) | O(n) → O(1) |
| Find element in sorted array | Linear search O(n) | Binary search O(log n) | O(n) → O(log n) |
| Sorting | Bubble sort O(n²) | Quick/Merge sort O(n log n) | O(n²) → O(n log n) |
| All pairs | Nested loops O(n²) | Hash map O(n) | O(n²) → O(n) |
| Fibonacci | Recursive O(2ⁿ) | DP/Iteration O(n) | O(2ⁿ) → O(n) |

### Space Complexity Tips

- **In-place algorithms:** O(1) space (except recursion stack)
- **Recursive calls:** O(depth) space for call stack
- **Hash tables/memoization:** O(n) space typically
- **Trade-off:** Often can trade space for time

---

## Practice Problems by Complexity

### O(1) Problems
- Swap two variables
- Check if number is even/odd
- Return first/last element

### O(log n) Problems
- Binary search
- Find in BST
- Power function (fast exponentiation)

### O(n) Problems
- Find max/min
- Two sum (with hash map)
- Reverse array
- Palindrome check

### O(n log n) Problems
- Merge sort
- Quick sort
- Sort then binary search problems

### O(n²) Problems
- Bubble sort
- Selection sort
- Find all pairs with given sum (naive)

---

## Additional Resources

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Visualgo](https://visualgo.net/)
- [Algorithm Visualizations](../visualizations/index.html)

---

**Remember:** Big-O is about **scalability**, not absolute speed. An O(n²) algorithm might be faster than O(n) for small n, but O(n) will always win for large enough input!
