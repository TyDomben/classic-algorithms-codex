# Bubble Sort

> Simple comparison-based sorting algorithm that repeatedly swaps adjacent elements if they're in wrong order

## Problem Statement

Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they're in the wrong order. The pass through the list is repeated until no swaps are needed, indicating the list is sorted.

The algorithm gets its name from the way smaller elements "bubble" to the top of the list with each iteration.

## Visual Example

```
Initial: [5, 2, 8, 1, 9]

Pass 1:
[5, 2, 8, 1, 9]  → Compare 5 & 2, swap
[2, 5, 8, 1, 9]  → Compare 5 & 8, no swap
[2, 5, 8, 1, 9]  → Compare 8 & 1, swap
[2, 5, 1, 8, 9]  → Compare 8 & 9, no swap
[2, 5, 1, 8, 9]  → Largest (9) bubbled to end

Pass 2:
[2, 5, 1, 8, 9]  → Compare 2 & 5, no swap
[2, 5, 1, 8, 9]  → Compare 5 & 1, swap
[2, 1, 5, 8, 9]  → Compare 5 & 8, no swap
[2, 1, 5, 8, 9]  → Second largest (8) in place

Pass 3:
[2, 1, 5, 8, 9]  → Compare 2 & 1, swap
[1, 2, 5, 8, 9]  → Compare 2 & 5, no swap
[1, 2, 5, 8, 9]  → Third largest (5) in place

Pass 4:
[1, 2, 5, 8, 9]  → Compare 1 & 2, no swap
[1, 2, 5, 8, 9]  → Sorted!

Final: [1, 2, 5, 8, 9]
```

## How It Works

1. **Start at the beginning** of the array
2. **Compare each pair** of adjacent elements
3. **Swap them** if they're in the wrong order
4. **Continue** to the end of the array (largest element is now in place)
5. **Repeat** for remaining unsorted portion
6. **Stop** when no swaps are made in a pass

### Optimization

The algorithm can be optimized by:
- Reducing the range with each pass (last elements are already sorted)
- Stopping early if no swaps occur (array is sorted)

### Example Walkthrough

```
Input: [64, 34, 25, 12, 22, 11, 90]

Pass 1: [34, 25, 12, 22, 11, 64, 90]  → 90 in place
Pass 2: [25, 12, 22, 11, 34, 64, 90]  → 64 in place
Pass 3: [12, 22, 11, 25, 34, 64, 90]  → 34 in place
Pass 4: [12, 11, 22, 25, 34, 64, 90]  → 25 in place
Pass 5: [11, 12, 22, 25, 34, 64, 90]  → 22 in place
Pass 6: [11, 12, 22, 25, 34, 64, 90]  → No swaps, done!

Output: [11, 12, 22, 25, 34, 64, 90]
```

## Complexity Analysis

### Time Complexity
- **Best Case:** O(n) - Array is already sorted, only one pass needed
- **Average Case:** O(n²) - Elements in random order
- **Worst Case:** O(n²) - Array sorted in reverse order

**Detailed:**
- Outer loop runs n times
- Inner loop runs (n-1), (n-2), ..., 1 times
- Total comparisons: (n-1) + (n-2) + ... + 1 = n(n-1)/2 ≈ O(n²)

### Space Complexity
- **O(1)** - Only a constant amount of extra space for the swap variable
- **In-place algorithm** - Sorts within the original array

## When to Use

✅ **Use when:**
- Learning sorting algorithms (great educational tool)
- Array is small (< 10 elements)
- Array is nearly sorted (best case O(n))
- Simplicity is more important than efficiency
- Memory is extremely limited (O(1) space)

❌ **Avoid when:**
- Working with large datasets
- Performance is critical
- Better alternatives are available (Merge Sort, Quick Sort)

## Pros and Cons

### Advantages
- ✅ **Simple to understand and implement**
- ✅ **No extra memory needed** (in-place)
- ✅ **Stable sort** (maintains relative order of equal elements)
- ✅ **Adaptive** (O(n) for nearly sorted data)
- ✅ **Can detect if list is sorted**

### Disadvantages
- ❌ **Slow for large datasets** (O(n²))
- ❌ **Not suitable for production** with large data
- ❌ **Many unnecessary comparisons**
- ❌ **Poor performance** compared to modern algorithms

## Real-World Applications

1. **Educational Tool** - Teaching sorting algorithm concepts
2. **Small Embedded Systems** - When memory is extremely limited
3. **Nearly Sorted Data** - Performs reasonably well (O(n))
4. **Debugging** - Simple implementation helps verify sorting logic

**Note:** Rarely used in production due to poor performance. Modern languages use Timsort (Python), Introsort (C++), or similar hybrid algorithms.

## Common Pitfalls

1. **Not optimizing the inner loop**
   - Solution: Reduce range by i each pass (last i elements are sorted)

2. **Not implementing early exit**
   - Solution: Track if any swaps occurred; if not, array is sorted

3. **Off-by-one errors in loop bounds**
   - Solution: Inner loop should go to `length - i - 1`

4. **Using for large datasets**
   - Solution: Use Quick Sort, Merge Sort, or built-in sort methods

## Variations

### 1. Optimized Bubble Sort
Stops early if no swaps occur.

### 2. Cocktail Shaker Sort
Alternates between left-to-right and right-to-left passes.

### 3. Comb Sort
Improves on bubble sort by using a gap sequence.

## Related Algorithms

- [Selection Sort](../selection-sort/) - Another simple O(n²) algorithm
- [Insertion Sort](../insertion-sort/) - Often faster than Bubble Sort
- [Merge Sort](../merge-sort/) - O(n log n) divide-and-conquer
- [Quick Sort](../quick-sort/) - O(n log n) with better constants

## Comparison with Similar Algorithms

| Algorithm | Time (Avg) | Space | Stable | Simple |
|-----------|-----------|-------|--------|--------|
| Bubble Sort | O(n²) | O(1) | Yes | ★★★★★ |
| Selection Sort | O(n²) | O(1) | No | ★★★★☆ |
| Insertion Sort | O(n²) | O(1) | Yes | ★★★★☆ |
| Merge Sort | O(n log n) | O(n) | Yes | ★★☆☆☆ |
| Quick Sort | O(n log n) | O(log n) | No | ★★★☆☆ |

## External Resources

- [Wikipedia - Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
- [GeeksforGeeks - Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/)
- [Visualgo - Sorting Visualizations](https://visualgo.net/en/sorting)
- [LeetCode #912 - Sort an Array](https://leetcode.com/problems/sort-an-array/)

## Implementations

- [JavaScript](implementation.js) - ES6+ with optimizations
- [Python](implementation.py) - With type hints and docstrings
- [Elixir](implementation.ex) - Functional approach with pattern matching
- [Interactive Visualization](visualization.html) - Step-by-step animation
- [Examples](examples.md) - Detailed walkthroughs
- [Tests](tests.js) - Comprehensive test suite

---

**Fun Fact:** Barack Obama once correctly described Bubble Sort as inefficient during an interview at Google, saying "I think the Bubble Sort would be the wrong way to go."

---

[⬅️ Back to Sorting](../) | [⬆️ Back to Main](../../../)
