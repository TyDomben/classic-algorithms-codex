# Merge Sort

Efficient, stable divide-and-conquer sorting algorithm that consistently delivers O(n log n) performance.

## Problem Statement

Sort an array of elements in ascending order using the merge sort algorithm, which recursively divides the array into halves, sorts them, and merges them back together.

## Visual Example

```
Initial: [38, 27, 43, 3, 9, 82, 10]

Divide Phase:
[38, 27, 43, 3, 9, 82, 10]
       ↓
[38, 27, 43, 3]    [9, 82, 10]
       ↓                 ↓
[38, 27]  [43, 3]    [9, 82]  [10]
    ↓         ↓          ↓       ↓
[38] [27]  [43] [3]   [9] [82]  [10]

Merge Phase:
[38] [27]  [43] [3]   [9] [82]  [10]
    ↓         ↓          ↓       ↓
[27, 38]  [3, 43]    [9, 82]  [10]
       ↓                 ↓
[3, 27, 38, 43]    [9, 10, 82]
            ↓
[3, 9, 10, 27, 38, 43, 82]  ✓ Sorted!
```

## Algorithm Explanation

### How It Works

1. **Divide:** Split the array into two halves
2. **Conquer:** Recursively sort each half
3. **Combine:** Merge the two sorted halves into one sorted array

### The Merge Process

The key operation is merging two sorted arrays:

```
Left:  [3, 27, 38]
Right: [9, 10, 43]

Compare first elements:
  3 < 9 → take 3
Result: [3]

Compare 27 and 9:
  9 < 27 → take 9
Result: [3, 9]

Compare 27 and 10:
  10 < 27 → take 10
Result: [3, 9, 10]

Compare 27 and 43:
  27 < 43 → take 27
Result: [3, 9, 10, 27]

Left exhausted, copy rest of right:
Result: [3, 9, 10, 27, 38, 43]
```

## Complexity Analysis

### Time Complexity

| Case | Complexity | Explanation |
|------|-----------|-------------|
| Best | **O(n log n)** | Always divides and merges |
| Average | **O(n log n)** | Consistent performance |
| Worst | **O(n log n)** | Even on reverse sorted |

**Why O(n log n)?**
- Dividing: Creates log n levels (binary split)
- Merging: Each level processes all n elements
- Total: n × log n operations

### Space Complexity

- **O(n)** - Requires auxiliary array for merging
- Can be optimized to O(log n) with in-place variants (complex)
- Not in-place like Quick Sort

### Stability

✅ **Stable** - Preserves relative order of equal elements

This is a major advantage over Quick Sort!

## When to Use Merge Sort

### ✅ Use When:

- **Stability is required** - Need to preserve order of equal elements
- **Predictable performance** - Can't afford O(n²) worst case
- **External sorting** - Sorting data that doesn't fit in memory
- **Linked lists** - Works excellently with linked lists (no extra space!)
- **Parallel processing** - Easily parallelizable

### ❌ Don't Use When:

- **Memory is limited** - Requires O(n) extra space
- **Small arrays** - Overhead of recursion isn't worth it (< 10 elements)
- **Nearly sorted data** - Insertion sort is faster
- **In-place requirement** - Use Quick Sort or Heap Sort

## Advantages

1. **Guaranteed O(n log n)** - No worst-case degradation
2. **Stable** - Maintains order of equal elements
3. **Predictable** - Performance doesn't depend on input
4. **Parallelizable** - Each half can be sorted independently
5. **Works on linked lists** - No random access needed
6. **External sorting** - Efficient for huge datasets

## Disadvantages

1. **Space overhead** - Requires O(n) extra memory
2. **Not in-place** - Can't sort with constant space
3. **Slower for small arrays** - Recursion overhead
4. **Cache performance** - Not as cache-friendly as Quick Sort

## Variants

### 1. Top-Down (Recursive)
```javascript
// Standard recursive approach
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
```

### 2. Bottom-Up (Iterative)
```javascript
// Avoids recursion overhead
function mergeSortIterative(arr) {
    // Start with size 1, merge pairs
    // Then size 2, merge pairs
    // Then size 4, etc.
}
```

### 3. Natural Merge Sort
```javascript
// Exploits existing runs in data
// Faster on partially sorted arrays
```

### 4. In-Place Merge Sort
```javascript
// O(n log n) time, O(log n) space
// Complex implementation
```

## Real-World Applications

1. **Sorting Linked Lists** - Used in Java's `Collections.sort()` for linked lists
2. **External Sorting** - Sorting files larger than RAM
3. **Database Systems** - External merge sort for disk-based sorting
4. **Inversion Counting** - Finding how far an array is from being sorted
5. **Stable Sort Requirement** - When order preservation is critical
6. **Parallel Processing** - Distributed sorting across multiple processors
7. **Tape Drives** - Historical use in sequential access storage

## Optimization Techniques

### 1. Hybrid with Insertion Sort
```javascript
// Use insertion sort for small subarrays
if (arr.length < 10) {
    return insertionSort(arr);
}
```

### 2. Eliminate Copy Operation
```javascript
// Alternate between original and auxiliary array
// Saves time on final copy
```

### 3. Check if Already Merged
```javascript
// If largest in left ≤ smallest in right
if (left[left.length-1] <= right[0]) {
    return [...left, ...right];  // Already sorted!
}
```

### 4. Three-Way Merge
```javascript
// Merge 3 subarrays at once
// Reduces number of levels
```

## Comparison with Other Sorts

| Feature | Merge Sort | Quick Sort | Heap Sort |
|---------|-----------|-----------|-----------|
| Time (avg) | O(n log n) | O(n log n) | O(n log n) |
| Time (worst) | O(n log n) | **O(n²)** | O(n log n) |
| Space | **O(n)** | O(log n) | O(1) |
| Stable | ✅ Yes | ❌ No | ❌ No |
| In-place | ❌ No | ✅ Yes | ✅ Yes |
| Cache | Fair | **Good** | Fair |
| Predictable | ✅ Yes | ❌ No | ✅ Yes |

## Common Pitfalls

### ❌ Pitfall 1: Not Handling Base Case
```javascript
// Wrong - infinite recursion!
function mergeSort(arr) {
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)),
                 mergeSort(arr.slice(mid)));
}

// Correct
function mergeSort(arr) {
    if (arr.length <= 1) return arr;  // Base case!
    // ... rest
}
```

### ❌ Pitfall 2: Incorrect Midpoint
```javascript
// Wrong for in-place version
const mid = arr.length / 2;  // Not integer!

// Correct
const mid = Math.floor(arr.length / 2);
```

### ❌ Pitfall 3: Modifying Original Array Unexpectedly
```javascript
// Functional style should return new array
const sorted = mergeSort(original);
console.log(original);  // Should be unchanged!
```

### ❌ Pitfall 4: Inefficient Merge
```javascript
// Slow - creates arrays in loop
while (i < left.length && j < right.length) {
    result = [...result, /* ... */];  // O(n²)!
}

// Fast - use index and push
while (i < left.length && j < right.length) {
    result.push(/* ... */);  // O(n)
}
```

## Interview Tips

### Common Questions

1. **"Why is merge sort O(n log n)?"**
   - log n levels from recursive splitting
   - Each level processes n elements in merge
   - Total: n × log n

2. **"Is merge sort stable?"**
   - Yes! When merging, we take from left first on equality
   - Preserves original relative order

3. **"What's the space complexity?"**
   - O(n) for auxiliary array
   - O(log n) for recursion stack
   - Total: O(n)

4. **"When would you use merge sort over quick sort?"**
   - Need stability
   - Can't risk O(n²) worst case
   - Sorting linked lists
   - External sorting

5. **"Can merge sort be done in-place?"**
   - Yes, but complex and slower
   - Loses practical advantage over quick sort

### Code Template
```javascript
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;

    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Conquer (merge)
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare and merge
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {  // <= for stability!
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    // Copy remaining
    return result.concat(left.slice(i)).concat(right.slice(j));
}
```

## Practice Problems

1. **Basic:** Implement merge sort from scratch
2. **Count Inversions:** Use merge sort to count inversions in array
3. **External Sort:** Simulate sorting a file larger than memory
4. **Linked List:** Implement merge sort for linked list
5. **K-Way Merge:** Merge k sorted arrays efficiently

## Related Algorithms

- **Quick Sort** - Also O(n log n), but in-place and unstable
- **Heap Sort** - O(n log n), in-place, but unstable
- **Tim Sort** - Hybrid of merge sort and insertion sort (Python's default)
- **External Merge Sort** - For data larger than memory
- **Counting Inversions** - Application of merge sort

## External Resources

- [Merge Sort Visualization](https://visualgo.net/en/sorting)
- [Merge Sort - Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [MIT OpenCourseWare - Merge Sort](https://ocw.mit.edu/courses/introduction-to-algorithms/)
- [Tim Sort Explained](https://github.com/python/cpython/blob/main/Objects/listsort.txt)

## Files in This Directory

- `README.md` - This file
- `implementation.js` - JavaScript implementation with multiple variants
- `implementation.py` - Python implementation with type hints
- `implementation.ex` - Elixir functional implementation
- `visualization.html` - Interactive visualization
- `tests.js` - Comprehensive test suite
- `examples.md` - Detailed walkthroughs and examples

## Next Steps

1. Study the [implementation.js](implementation.js) to see the code
2. Try the [visualization.html](visualization.html) to see it in action
3. Read [examples.md](examples.md) for detailed walkthroughs
4. Run tests with: `node tests.js`

---

**Remember:** Merge sort is the go-to when you need **guaranteed O(n log n)** performance and **stability**!
