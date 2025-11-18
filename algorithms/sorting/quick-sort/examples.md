# Quick Sort - Detailed Examples

## Example 1: Basic Quick Sort Walkthrough

**Input:** `[8, 3, 1, 7, 0, 10, 2]`

### Step-by-Step Execution

**Initial State:**
```
Array: [8, 3, 1, 7, 0, 10, 2]
Range: 0 to 6
```

**First Partition (range 0-6):**
```
Pivot: 2 (last element)
Array: [8, 3, 1, 7, 0, 10, 2]
       └─ all elements > 2 ─┘ └pivot

Comparing each element with pivot (2):
- 8 > 2: stays right
- 3 > 2: stays right
- 1 ≤ 2: move to left partition
- 7 > 2: stays right
- 0 ≤ 2: move to left partition
- 10 > 2: stays right

After partitioning:
[1, 0, 2, 7, 3, 10, 8]
 └──┘ │ └────────┘
 left  P    right

Pivot (2) is now in position 2
Left partition: [1, 0]
Right partition: [7, 3, 10, 8]
```

**Recursively Sort Left [1, 0]:**
```
Pivot: 0
Array: [1, 0]
After partition: [0, 1]
Both single elements after split - done!
```

**Recursively Sort Right [7, 3, 10, 8]:**
```
Pivot: 8
Array: [7, 3, 10, 8]

Comparing with 8:
- 7 ≤ 8: left
- 3 ≤ 8: left
- 10 > 8: right

After partition: [7, 3, 8, 10]
                  └──┘ │  └┘
                  left P  right

Left partition: [7, 3]
Right partition: [10]
```

**Sort [7, 3]:**
```
Pivot: 3
After partition: [3, 7]
```

**Final Result:**
```
[0, 1, 2, 3, 7, 8, 10]  ✓ Sorted!
```

---

## Example 2: Understanding Partitioning

**Input:** `[5, 2, 8, 1, 9]`

### Partition Process in Detail

**Choose Pivot:** 9 (last element)

```
Initial: [5, 2, 8, 1, 9]
          i=-1        pivot

i tracks the boundary of the "less than pivot" section
j scans through the array
```

**Iteration by iteration:**

```
j=0, arr[0]=5, compare with 9:
  5 ≤ 9? YES → i++ (i=0), swap arr[i] with arr[j]
  [5, 2, 8, 1, 9]
   i,j

j=1, arr[1]=2, compare with 9:
  2 ≤ 9? YES → i++ (i=1), swap arr[i] with arr[j]
  [5, 2, 8, 1, 9]
      i,j

j=2, arr[2]=8, compare with 9:
  8 ≤ 9? YES → i++ (i=2), swap arr[i] with arr[j]
  [5, 2, 8, 1, 9]
         i,j

j=3, arr[3]=1, compare with 9:
  1 ≤ 9? YES → i++ (i=3), swap arr[i] with arr[j]
  [5, 2, 8, 1, 9]
            i,j

Final step: Place pivot at i+1
  Swap arr[4] with arr[i+1]
  [5, 2, 8, 1, 9]
               i  ← pivot goes here

Result: [5, 2, 8, 1, 9]
Pivot 9 at index 4 (already in place!)
```

---

## Example 3: 3-Way Partitioning with Duplicates

**Input:** `[4, 2, 6, 2, 8, 2, 4]`

**Why 3-way partitioning?**
- Many duplicate values (three 2's, two 4's)
- Regular Quick Sort would recursively process duplicates
- 3-way partitioning groups all equal values together

### Partition Process

```
Initial: [4, 2, 6, 2, 8, 2, 4]
Pivot: 4 (first element)

lt = left boundary for less than pivot
gt = right boundary for greater than pivot
i = current scanning position
```

**Step-by-step:**

```
Scan position i=0, value=4:
  4 == pivot → just move i++
  [4, 2, 6, 2, 8, 2, 4]
   lt,i              gt

i=1, value=2:
  2 < pivot → swap with lt, increment both
  [2, 4, 6, 2, 8, 2, 4]
      lt,i           gt

i=2, value=6:
  6 > pivot → swap with gt, decrement gt (don't increment i!)
  [2, 4, 4, 2, 8, 2, 6]
      lt,i        gt

i=2, value=4:
  4 == pivot → just move i++
  [2, 4, 4, 2, 8, 2, 6]
      lt   i     gt

i=3, value=2:
  2 < pivot → swap with lt
  [2, 2, 4, 4, 8, 2, 6]
         lt   i  gt

i=4, value=8:
  8 > pivot → swap with gt
  [2, 2, 4, 4, 2, 8, 6]
         lt  i,gt

i=4, value=2:
  2 < pivot → swap with lt
  [2, 2, 2, 4, 4, 8, 6]
            lt i,gt

i > gt, stop!

Result partitions:
[2, 2, 2] [4, 4] [8, 6]
  < 4      = 4    > 4

All 4's are grouped together!
Only need to sort [2,2,2] and [8,6]
```

---

## Example 4: Worst Case Scenario

**Input:** `[5, 4, 3, 2, 1]` (Reverse sorted)

**Why worst case?**
- Each partition is maximally unbalanced
- Pivot is always the largest (or smallest)
- Leads to O(n²) complexity

### Partition sequence:

```
Step 1: [5, 4, 3, 2, 1]
  Pivot: 1
  After: [1] [5, 4, 3, 2]
  Unbalanced! Left has 1, right has 4

Step 2: [5, 4, 3, 2]
  Pivot: 2
  After: [1, 2] [5, 4, 3]
  Still unbalanced!

Step 3: [5, 4, 3]
  Pivot: 3
  After: [1, 2, 3] [5, 4]

Step 4: [5, 4]
  Pivot: 4
  After: [1, 2, 3, 4] [5]

Final: [1, 2, 3, 4, 5]
```

**Recursion tree:**
```
          [5,4,3,2,1]         ← n
               |
         /           \
      [1]         [5,4,3,2]   ← n-1
                      |
                 /        \
              [2]      [5,4,3] ← n-2
                          |
                    (continues...)

Height: O(n)
Work per level: O(n)
Total: O(n²)
```

---

## Example 5: Randomized Quick Sort

**Input:** `[5, 2, 8, 1, 9]`

**Functional approach:**

```javascript
quickSortRandomized([5, 2, 8, 1, 9])

Step 1: Pick random pivot, say 5
  left  = [2, 1]      (values < 5)
  middle = [5]         (values == 5)
  right = [8, 9]      (values > 5)

Step 2: Recursively sort left [2, 1]
  Pivot: 2
  left  = [1]
  middle = [2]
  right = []
  Result: [1, 2]

Step 3: Recursively sort right [8, 9]
  Pivot: 8
  left  = []
  middle = [8]
  right = [9]
  Result: [8, 9]

Step 4: Concatenate
  [1, 2] + [5] + [8, 9] = [1, 2, 5, 8, 9]
```

**Key difference from in-place:**
- Creates new arrays
- More memory usage: O(n)
- But simpler to understand
- Randomization avoids worst case

---

## Example 6: Performance Comparison

### Test Case: Array of 10 elements

```
Input: [64, 34, 25, 12, 22, 11, 90, 88, 45, 50]
```

**Standard Quick Sort:**
```
Comparisons: ~25
Swaps: ~15
Recursion depth: ~4
Time: O(n log n)
```

**3-Way Partitioning (same input):**
```
Comparisons: ~25
Swaps: ~15
Recursion depth: ~4
Similar performance when few duplicates
```

**Now with many duplicates:**
```
Input: [5, 2, 5, 5, 1, 5, 2, 5, 5, 5]
```

**Standard Quick Sort:**
```
Comparisons: ~35
Swaps: ~20
Recursion depth: ~6
Has to process duplicate 5's multiple times
```

**3-Way Partitioning:**
```
Comparisons: ~20
Swaps: ~10
Recursion depth: ~3
Groups all 5's together in one partition!
Much more efficient!
```

---

## Example 7: Real-World Application

### Sorting Student Records

```javascript
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'Diana', grade: 92 },
    { name: 'Eve', grade: 88 }
];

// Custom comparator for grades
function quickSortStudents(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSortStudents(arr, left, pivotIndex - 1);
        quickSortStudents(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right].grade;
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j].grade <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

quickSortStudents(students);

// Result:
// [
//   { name: 'Charlie', grade: 78 },
//   { name: 'Alice', grade: 85 },
//   { name: 'Eve', grade: 88 },
//   { name: 'Bob', grade: 92 },      // or Diana (unstable)
//   { name: 'Diana', grade: 92 }     // or Bob
// ]
```

**Note:** Quick Sort is unstable - Bob and Diana (both grade 92) may swap order!

---

## Example 8: Complexity Analysis

### Average Case: O(n log n)

```
Array of size 8: [8, 3, 1, 7, 0, 10, 2, 5]

Level 0: Process all 8 elements           = 8 comparisons
         Split into roughly [4] and [4]

Level 1: Process 4 + 4 elements           = 8 comparisons
         Split into [2,2] and [2,2]

Level 2: Process 2+2+2+2 elements         = 8 comparisons
         Split into 8 individual elements

Level 3: Base cases                       = 0 comparisons

Total levels: log₂(8) = 3
Work per level: ~8
Total work: 8 × 3 = 24 ≈ 8 × log₂(8)
```

### Worst Case: O(n²)

```
Array: [1, 2, 3, 4, 5]

Level 0: 5 comparisons → [1] and [2,3,4,5]
Level 1: 4 comparisons → [2] and [3,4,5]
Level 2: 3 comparisons → [3] and [4,5]
Level 3: 2 comparisons → [4] and [5]
Level 4: 1 comparison

Total: 5+4+3+2+1 = 15 = n(n+1)/2 ≈ O(n²)
```

---

## Example 9: When to Use Each Variant

### Standard Quick Sort
**Use when:**
- Random or well-mixed data
- Memory is limited (in-place)
- Average O(n log n) is acceptable

**Example:** Sorting user-uploaded data

### Randomized Quick Sort
**Use when:**
- Input might be adversarial
- Need guaranteed average case
- Memory not a concern

**Example:** Online judge systems, untrusted input

### 3-Way Partitioning
**Use when:**
- Many duplicate values expected
- Categorical data (e.g., sorting by country)
- Want optimal performance on duplicates

**Example:**
```javascript
// Sorting colors: many duplicates!
const colors = ['red', 'blue', 'red', 'green', 'blue', 'red', 'blue'];
// 3-way partitioning excels here
```

---

## Common Pitfalls

### Pitfall 1: Off-by-One Errors
```javascript
// ❌ Wrong
quickSort(arr, left, pivotIndex);     // Should be pivotIndex - 1
quickSort(arr, pivotIndex, right);    // Should be pivotIndex + 1

// ✅ Correct
quickSort(arr, left, pivotIndex - 1);
quickSort(arr, pivotIndex + 1, right);
```

### Pitfall 2: Not Handling Empty Arrays
```javascript
// ❌ Wrong
function quickSort(arr, left, right) {
    const pivot = partition(arr, left, right);  // Crashes on empty!
    // ...
}

// ✅ Correct
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;  // Base case first!
    const pivot = partition(arr, left, right);
    // ...
}
```

### Pitfall 3: Forgetting Swap in Partition
```javascript
// ❌ Wrong
arr[i + 1] = arr[right];  // Lost the value at i+1!

// ✅ Correct
[arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
```

---

## Practice Exercises

1. **Trace by hand:** `[9, 7, 5, 3, 1]` using standard Quick Sort
2. **Count operations:** How many comparisons for `[1, 2, 3, 4, 5]`?
3. **Modify:** Change partition to use first element as pivot
4. **Implement:** Quick Sort for strings
5. **Optimize:** Add insertion sort for small subarrays (< 10 elements)

**Solutions in README.md!**
