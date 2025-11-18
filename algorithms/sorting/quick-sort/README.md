# Quick Sort

> Efficient divide-and-conquer sorting algorithm using partitioning

## Problem Statement

Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer strategy. It works by selecting a 'pivot' element and partitioning the array around it, placing all smaller elements before the pivot and all larger elements after it. This process is recursively applied to the sub-arrays.

## Visual Example

```
Array: [8, 3, 1, 7, 0, 10, 2]
Pivot: 2 (last element)

Partition:
[8, 3, 1, 7, 0, 10, 2]
 ^                  pivot

Compare 8 with 2: 8 > 2, skip
Compare 3 with 2: 3 > 2, skip
Compare 1 with 2: 1 < 2, swap with first element > pivot
[1, 3, 8, 7, 0, 10, 2]
 ^
Compare 7 with 2: 7 > 2, skip
Compare 0 with 2: 0 < 2, swap
[1, 0, 8, 7, 3, 10, 2]

Place pivot in correct position:
[1, 0, 2, 7, 3, 10, 8]
       ^pivot is now in correct place

Recursively sort left [1, 0] and right [7, 3, 10, 8]
```

## How It Works

1. **Choose a pivot** (typically last element)
2. **Partition** array: elements < pivot go left, elements > pivot go right
3. **Place pivot** in its correct position
4. **Recursively** apply to left and right subarrays
5. **Base case**: array of size 0 or 1 is already sorted

## Complexity Analysis

### Time Complexity
- **Best Case:** O(n log n) - pivot always divides array evenly
- **Average Case:** O(n log n) - random pivots
- **Worst Case:** O(n²) - pivot is always smallest/largest (sorted array with bad pivot choice)

### Space Complexity
- **O(log n)** - recursion stack space (average case)
- **O(n)** - worst case recursion depth

## When to Use

✅ **Use when:**
- Need fast average-case performance
- In-place sorting is important
- Working with large datasets
- Random/shuffled data

❌ **Avoid when:**
- Data is already sorted (use randomized pivot or three-way partitioning)
- Stable sort is required
- Guaranteed O(n log n) needed (use Merge Sort or Heap Sort)

## Pros and Cons

### Advantages
- ✅ **Very fast** in practice (faster than Merge Sort typically)
- ✅ **In-place** sorting (O(log n) space)
- ✅ **Cache-efficient** (good locality of reference)
- ✅ **Easy to implement**

### Disadvantages
- ❌ **Unstable** sort
- ❌ **O(n²) worst case** (though rare with good pivot selection)
- ❌ **Poor performance** on already sorted data (without randomization)

## Real-World Applications

1. **Standard Library Sorting** - Used in many language libraries
2. **Database Systems** - Internal sorting
3. **Operating Systems** - File system operations
4. **Numerical Computing** - Large dataset sorting

## Common Pitfalls

1. **Bad Pivot Selection**
   - Solution: Use median-of-three or random pivot

2. **Stack Overflow on Large Arrays**
   - Solution: Use tail recursion optimization or iterative version

3. **Poor Performance on Sorted Data**
   - Solution: Shuffle data first or use randomized pivot

4. **Not Handling Duplicates Well**
   - Solution: Use three-way partitioning (Dutch National Flag)

## Variations

- **Randomized Quick Sort** - Random pivot selection
- **Three-Way Quick Sort** - Handles duplicates efficiently
- **Dual-Pivot Quick Sort** - Uses two pivots (used in Java's Arrays.sort())
- **Introspective Sort** - Switches to Heap Sort if recursion depth is too large

## Related Algorithms

- [Merge Sort](../merge-sort/) - Guaranteed O(n log n) but uses O(n) space
- [Heap Sort](../heap-sort/) - In-place O(n log n) but slower in practice
- [Insertion Sort](../insertion-sort/) - Often used for small subarrays

## External Resources

- [Wikipedia - Quick Sort](https://en.wikipedia.org/wiki/Quicksort)
- [Visualgo - Quick Sort](https://visualgo.net/en/sorting)
- [LeetCode #912 - Sort an Array](https://leetcode.com/problems/sort-an-array/)

## Implementations

- [JavaScript](implementation.js)
- [Python](implementation.py)
- [Interactive Visualization](visualization.html)

---

[⬅️ Back to Sorting](../) | [⬆️ Back to Main](../../../)
