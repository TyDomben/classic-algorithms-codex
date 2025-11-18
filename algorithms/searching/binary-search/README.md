# Binary Search

> Efficient O(log n) search algorithm for sorted arrays using divide and conquer

## Problem Statement

Binary Search is an efficient algorithm for finding a target value within a **sorted array**. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, narrow the search to the lower half. Otherwise, narrow it to the upper half. Continue until the value is found or the interval is empty.

**Key Requirement:** The array must be sorted!

## Visual Example

```
Array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
Target: 7

Step 1: Check middle (9)
[1, 3, 5, 7, | 9 | 11, 13, 15, 17, 19]
7 < 9, search left half

Step 2: Check middle of left half (3)
[1, | 3 | 5, 7]
7 > 3, search right half

Step 3: Check middle of right half (5)
[5, | 7 |]
7 > 5, search right half

Step 4: Found!
[| 7 |]
Target found at index 3
```

## How It Works

1. **Compare target** with middle element
2. **If equal:** Found! Return index
3. **If target < middle:** Search left half
4. **If target > middle:** Search right half
5. **Repeat** until found or search space is empty

## Complexity Analysis

### Time Complexity
- **Best Case:** O(1) - target is the middle element
- **Average Case:** O(log n) - halves search space each iteration
- **Worst Case:** O(log n) - target not found or at end

### Space Complexity
- **Iterative:** O(1) - constant extra space
- **Recursive:** O(log n) - call stack depth

## When to Use

✅ **Use when:**
- Array is sorted
- Need fast lookups (O(log n))
- Array size is large
- Random access is available (arrays, not linked lists)

❌ **Avoid when:**
- Array is unsorted (use linear search or sort first)
- Using linked list (no random access)
- Array is very small (< 10 elements, linear search is fine)

## Pros and Cons

### Advantages
- ✅ **Very fast** - O(log n) is excellent
- ✅ **Simple to implement**
- ✅ **No extra space needed** (iterative version)
- ✅ **Scales well** - 1 million elements ≈ 20 comparisons

### Disadvantages
- ❌ **Requires sorted array**
- ❌ **Doesn't work on linked lists** efficiently
- ❌ **No advantage for small arrays**

## Real-World Applications

1. **Dictionary/Phone Book** - Looking up words or names
2. **Database Indexes** - Fast database queries
3. **Git Bisect** - Finding which commit introduced a bug
4. **Debugging** - Finding where code behavior changes
5. **Library Systems** - Finding books by ID
6. **Version Control** - Finding when a change occurred

## Common Pitfalls

1. **Forgetting array must be sorted**
2. **Integer overflow** in `mid = (left + right) / 2`
   - Better: `mid = left + (right - left) / 2`
3. **Off-by-one errors** in loop conditions
4. **Using on unsorted data**

## Variations

- **Lower Bound** - First occurrence in duplicates
- **Upper Bound** - Last occurrence in duplicates
- **Rotated Array Search** - Binary search in rotated sorted array
- **Infinite Array** - When array size is unknown

## Related Algorithms

- [Linear Search](../linear-search/) - O(n) alternative for unsorted data
- [Jump Search](../jump-search/) - O(√n) alternative
- [Interpolation Search](../interpolation-search/) - Better for uniformly distributed data
- [Exponential Search](../exponential-search/) - For unbounded searches

## External Resources

- [Wikipedia - Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [LeetCode #704 - Binary Search](https://leetcode.com/problems/binary-search/)
- [Visualgo - Binary Search](https://visualgo.net/en/bst)

## Implementations

- [JavaScript](implementation.js)
- [Python](implementation.py)
- [Elixir](implementation.ex)
- [Interactive Visualization](visualization.html)

---

[⬅️ Back to Searching](../) | [⬆️ Back to Main](../../../)
