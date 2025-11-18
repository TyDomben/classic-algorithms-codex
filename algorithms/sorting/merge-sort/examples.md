# Merge Sort - Detailed Examples

## Example 1: Basic Merge Sort Walkthrough

**Input:** `[38, 27, 43, 3]`

### Complete Execution Tree

```
Initial: [38, 27, 43, 3]

DIVIDE PHASE:
============

Level 0: [38, 27, 43, 3]
         └─ Split at mid=2

Level 1: [38, 27]          [43, 3]
         └─ mid=1          └─ mid=1

Level 2: [38] [27]         [43] [3]
         (base case)       (base case)

MERGE PHASE:
===========

Level 2 → Level 1:
  Merge [38] + [27]:
    Compare 38 vs 27 → take 27
    Result: [27, 38]

  Merge [43] + [3]:
    Compare 43 vs 3 → take 3
    Result: [3, 43]

Level 1 → Level 0:
  Merge [27, 38] + [3, 43]:
    Compare 27 vs 3 → take 3
    Compare 27 vs 43 → take 27
    Compare 38 vs 43 → take 38
    Take remaining: 43
    Result: [3, 27, 38, 43]

Final: [3, 27, 38, 43] ✓
```

### Detailed Step-by-Step

**Step 1: Initial Division**
```
[38, 27, 43, 3]
 └─ mid = 2
Left:  [38, 27]
Right: [43, 3]
```

**Step 2: Divide Left Half**
```
[38, 27]
 └─ mid = 1
Left:  [38]  (size 1 - base case!)
Right: [27]  (size 1 - base case!)
```

**Step 3: Merge Left Half**
```
Merge [38] + [27]:
  i=0, j=0
  Compare arr[0]=38 vs arr[0]=27
  27 ≤ 38 → take 27
  Result so far: [27]

  No more from right, take from left:
  Result: [27, 38]
```

**Step 4: Divide Right Half**
```
[43, 3]
 └─ mid = 1
Left:  [43]  (size 1 - base case!)
Right: [3]   (size 1 - base case!)
```

**Step 5: Merge Right Half**
```
Merge [43] + [3]:
  Compare 43 vs 3
  3 < 43 → take 3
  Result so far: [3]

  Take remaining: 43
  Result: [3, 43]
```

**Step 6: Final Merge**
```
Merge [27, 38] + [3, 43]:

  i=0, j=0: Compare 27 vs 3
    3 < 27 → take 3
    Result: [3]

  i=0, j=1: Compare 27 vs 43
    27 < 43 → take 27
    Result: [3, 27]

  i=1, j=1: Compare 38 vs 43
    38 < 43 → take 38
    Result: [3, 27, 38]

  Left exhausted, take from right:
    Result: [3, 27, 38, 43]
```

---

## Example 2: Understanding the Merge Process

**Input:** `[5, 2, 8, 1]`

### Merge Two Sorted Arrays

Let's focus on merging `[2, 5]` and `[1, 8]`:

```
Left:  [2, 5]
Right: [1, 8]
Result: []

i=0 (left[0]=2), j=0 (right[0]=1)
  Compare: 2 vs 1
  1 < 2 → take 1
  Result: [1]
  Advance j to 1

i=0 (left[0]=2), j=1 (right[1]=8)
  Compare: 2 vs 8
  2 < 8 → take 2
  Result: [1, 2]
  Advance i to 1

i=1 (left[1]=5), j=1 (right[1]=8)
  Compare: 5 vs 8
  5 < 8 → take 5
  Result: [1, 2, 5]
  Advance i to 2

i=2 (left exhausted)
  Copy remaining from right: [8]
  Result: [1, 2, 5, 8]
```

### Why It Works

The key insight: **Both input arrays are already sorted!**

- We only need to compare the front elements
- Smaller one must be next in final result
- Like merging two sorted decks of cards

---

## Example 3: Recursion Tree Visualization

**Input:** `[8, 3, 1, 7, 0, 10, 2, 5]`

### Full Recursion Tree

```
                [8,3,1,7,0,10,2,5]         Level 0
                       |
         ┌─────────────┴─────────────┐
    [8,3,1,7]                    [0,10,2,5]  Level 1
        |                            |
    ┌───┴───┐                   ┌────┴────┐
 [8,3]    [1,7]              [0,10]     [2,5]  Level 2
   |        |                  |          |
 ┌─┴─┐   ┌─┴─┐              ┌─┴─┐      ┌─┴─┐
[8][3]   [1][7]            [0][10]    [2][5]  Level 3 (Base)
 │   │    │   │             │   │      │   │
 └─┬─┘    └─┬─┘             └─┬─┘      └─┬─┘
 [3,8]    [1,7]              [0,10]    [2,5]  Merge ↑
   └───┬───┘                    └────┬────┘
   [1,3,7,8]                      [0,2,5,10]  Merge ↑
       └──────────┬────────────────────┘
            [0,1,2,3,5,7,8,10]             Final Merge ↑
```

### Complexity Analysis

- **Height of tree:** log₂(8) = 3 levels
- **Work per level:** Merging all n elements = O(n)
- **Total work:** 3 × 8 = 24 ≈ n log n

---

## Example 4: Iterative (Bottom-Up) Merge Sort

**Input:** `[5, 2, 8, 1, 9, 3, 7, 4]`

### Iteration by Size

**Size = 1:** Merge pairs of size 1
```
[5] + [2] → [2, 5]
[8] + [1] → [1, 8]
[9] + [3] → [3, 9]
[7] + [4] → [4, 7]

After: [2, 5, 1, 8, 3, 9, 4, 7]
```

**Size = 2:** Merge pairs of size 2
```
[2, 5] + [1, 8] → [1, 2, 5, 8]
[3, 9] + [4, 7] → [3, 4, 7, 9]

After: [1, 2, 5, 8, 3, 4, 7, 9]
```

**Size = 4:** Merge pairs of size 4
```
[1, 2, 5, 8] + [3, 4, 7, 9] → [1, 2, 3, 4, 5, 7, 8, 9]

Final: [1, 2, 3, 4, 5, 7, 8, 9]
```

### Advantages of Iterative

- No recursion overhead
- Better for some embedded systems
- Explicit control over merge size
- Easier to make parallel

---

## Example 5: Stability Demonstration

**Input:** Objects with equal values

```javascript
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 90 },
    { name: 'Charlie', grade: 85 },
    { name: 'Diana', grade: 90 }
];
```

### Sorting by Grade

**Original Order:**
```
Alice(85), Bob(90), Charlie(85), Diana(90)
```

**After Merge Sort:**
```
Alice(85), Charlie(85), Bob(90), Diana(90)
```

**Key Point:** Alice comes before Charlie (both 85), Bob before Diana (both 90).

Original relative order **preserved** for equal values!

### Why Stability Matters

```javascript
// First sort by grade
mergeSort(students, (a, b) => a.grade - b.grade);
// Then sort by name (stable!)
mergeSort(students, (a, b) => a.name.localeCompare(b.name));

// Result: Sorted by name, ties broken by grade!
```

---

## Example 6: Optimized Merge Sort

**Input:** `[1, 2, 3, 15, 4, 5, 6, 16]`

### Standard vs Optimized

**Standard Merge Sort:**
```
Divides all the way down:
[1,2,3,15,4,5,6,16] → ... → [1][2][3][15][4][5][6][16]
Then merges back up
```

**Optimized Merge Sort:**
```
At size 4, switch to insertion sort:
[1, 2, 3, 15] → already sorted by insertion sort
[4, 5, 6, 16] → already sorted by insertion sort

Then merge: [1,2,3,15] + [4,5,6,16] → [1,2,3,4,5,6,15,16]
```

### Early Termination Optimization

```
Left:  [1, 2, 3]
Right: [4, 5, 6]

Check: Is left[last] ≤ right[first]?
       Is 3 ≤ 4? YES!

Skip merge, just concatenate: [1, 2, 3, 4, 5, 6]
```

**Saves work when data is partially sorted!**

---

## Example 7: Counting Inversions

Merge sort can count inversions (pairs out of order):

**Input:** `[8, 4, 2, 1]`

### Inversion Pairs

Inversions:
- (8,4), (8,2), (8,1)
- (4,2), (4,1)
- (2,1)

Total: 6 inversions

### Using Merge Sort

```
Merge [8] + [4]:
  8 > 4 → inversion! Count += 1
  Result: [4, 8]

Merge [2] + [1]:
  2 > 1 → inversion! Count += 1
  Result: [1, 2]

Merge [4, 8] + [1, 2]:
  4 > 1 → inversion! Count += 2 (4>1 and 8>1)
  4 > 2 → inversion! Count += 2 (4>2 and 8>2)
  Result: [1, 2, 4, 8]

Total inversions: 1 + 1 + 2 + 2 = 6 ✓
```

---

## Example 8: External Merge Sort

Sorting a file too large for memory.

**Scenario:** Sort 1 GB file with only 100 MB RAM

### Phase 1: Create Sorted Runs

```
Read 100 MB chunks:
  Chunk 1: [data...] → sort in memory → write run1.dat
  Chunk 2: [data...] → sort in memory → write run2.dat
  ...
  Chunk 10: [data...] → sort in memory → write run10.dat
```

### Phase 2: Merge Runs

```
Merge run1.dat + run2.dat → temp1.dat
Merge run3.dat + run4.dat → temp2.dat
...

Merge temp1.dat + temp2.dat → temp_final1.dat
...

Final merge → sorted_output.dat
```

**Uses disk instead of RAM for large halves!**

---

## Example 9: Performance Comparison

### Test Case: 10,000 elements

**Merge Sort:**
```
Comparisons: ~100,000
Time: 5ms
Memory: 10,000 elements auxiliary
Stable: Yes
Worst case: O(n log n)
```

**Quick Sort:**
```
Comparisons: ~120,000 (average)
Time: 3ms (better cache locality)
Memory: O(log n) stack
Stable: No
Worst case: O(n²)
```

**Bubble Sort:**
```
Comparisons: 50,000,000
Time: 200ms
Memory: O(1)
Stable: Yes
Worst case: O(n²)
```

### When to Use Each

| Scenario | Best Choice |
|----------|-------------|
| Need stability | Merge Sort |
| Limited memory | Quick Sort |
| Linked lists | Merge Sort |
| Small arrays | Insertion Sort |
| Nearly sorted | Tim Sort (hybrid) |

---

## Example 10: Parallel Merge Sort

**Input:** `[8, 3, 1, 7, 0, 10, 2, 5]`

### Parallelization Strategy

```
Thread 1: Sort [8, 3, 1, 7]  ┐
                              ├─ Run in parallel
Thread 2: Sort [0, 10, 2, 5] ┘

Wait for both threads...

Main thread: Merge results
```

### Speedup

```
Sequential: 4 levels × n work = 4n
Parallel (2 cores):
  Level 1-3: Parallel → 3n / 2 = 1.5n
  Level 4: Sequential → n
  Total: 2.5n

Speedup: 4n / 2.5n = 1.6x
```

**More cores = better speedup (up to a point)**

---

## Common Pitfalls

### ❌ Pitfall 1: Forgetting Base Case
```javascript
function mergeSort(arr) {
    const mid = Math.floor(arr.length / 2);
    return merge(
        mergeSort(arr.slice(0, mid)),  // Infinite recursion!
        mergeSort(arr.slice(mid))
    );
}

// ✅ Correct: Add base case
if (arr.length <= 1) return arr;
```

### ❌ Pitfall 2: Off-by-One in Merge
```javascript
// Wrong: mid+1 duplicates middle element
const leftArr = arr.slice(left, mid);
const rightArr = arr.slice(mid, right);

// ✅ Correct
const leftArr = arr.slice(left, mid + 1);
const rightArr = arr.slice(mid + 1, right + 1);
```

### ❌ Pitfall 3: Not Using <= for Stability
```javascript
// Wrong: destroys stability
if (left[i] < right[j]) {  // Should be <=

// ✅ Correct: ensures stability
if (left[i] <= right[j]) {
```

### ❌ Pitfall 4: Inefficient Merging
```javascript
// Slow: repeatedly creates arrays
result = result.concat([left[i]]);  // O(n²)

// ✅ Fast: use push
result.push(left[i]);  // O(1)
```

---

## Practice Exercises

1. **Trace by hand:** `[5, 3, 8, 1, 2, 7]` through merge sort
2. **Modify:** Change to sort in descending order
3. **Implement:** Count inversions during merge
4. **Optimize:** Add insertion sort cutoff for small subarrays
5. **Challenge:** Implement in-place merge (O(n log n) time, O(1) space)
6. **Apply:** Sort linked list using merge sort

## Solutions

### Exercise 1: Trace

```
[5,3,8,1,2,7]
├─ [5,3,8]
│  ├─ [5,3]
│  │  ├─ [5]
│  │  ├─ [3]
│  │  └─ [3,5]
│  ├─ [8]
│  └─ [3,5,8]
├─ [1,2,7]
│  ├─ [1,2]
│  │  ├─ [1]
│  │  ├─ [2]
│  │  └─ [1,2]
│  ├─ [7]
│  └─ [1,2,7]
└─ [1,2,3,5,7,8]
```

---

**Key Takeaway:** Merge sort is the most predictable and stable O(n log n) sorting algorithm. Perfect when you need guaranteed performance and stability!
