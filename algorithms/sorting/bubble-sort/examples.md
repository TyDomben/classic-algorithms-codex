# Bubble Sort - Examples

## Example 1: Basic Sorting

**Input:** `[5, 2, 8, 1, 9]`

### Step-by-Step Execution

**Initial State:**
```
Array: [5, 2, 8, 1, 9]
```

**Pass 1:**
```
Compare 5 and 2  → Swap    → [2, 5, 8, 1, 9]
Compare 5 and 8  → No swap → [2, 5, 8, 1, 9]
Compare 8 and 1  → Swap    → [2, 5, 1, 8, 9]
Compare 8 and 9  → No swap → [2, 5, 1, 8, 9]

Result: Largest element (9) is now at the end
Array: [2, 5, 1, 8, 9]
Sorted positions: [9]
```

**Pass 2:**
```
Compare 2 and 5  → No swap → [2, 5, 1, 8, 9]
Compare 5 and 1  → Swap    → [2, 1, 5, 8, 9]
Compare 5 and 8  → No swap → [2, 1, 5, 8, 9]

Result: Second largest (8) is in position
Array: [2, 1, 5, 8, 9]
Sorted positions: [8, 9]
```

**Pass 3:**
```
Compare 2 and 1  → Swap    → [1, 2, 5, 8, 9]
Compare 2 and 5  → No swap → [1, 2, 5, 8, 9]

Result: Third largest (5) is in position
Array: [1, 2, 5, 8, 9]
Sorted positions: [5, 8, 9]
```

**Pass 4:**
```
Compare 1 and 2  → No swap → [1, 2, 5, 8, 9]

Result: No swaps needed - array is sorted!
```

**Output:** `[1, 2, 5, 8, 9]`

**Statistics:**
- Total passes: 4
- Total comparisons: 10
- Total swaps: 4
- Time complexity: O(n²) = O(5²) = O(25) maximum

---

## Example 2: Already Sorted Array (Best Case)

**Input:** `[1, 2, 3, 4, 5]`

### Execution

**Pass 1:**
```
Compare 1 and 2  → No swap → [1, 2, 3, 4, 5]
Compare 2 and 3  → No swap → [1, 2, 3, 4, 5]
Compare 3 and 4  → No swap → [1, 2, 3, 4, 5]
Compare 4 and 5  → No swap → [1, 2, 3, 4, 5]

Result: No swaps occurred - array is sorted!
```

**Output:** `[1, 2, 3, 4, 5]`

**Statistics:**
- Total passes: 1 (with optimization)
- Total comparisons: 4
- Total swaps: 0
- Time complexity: O(n) - best case!

---

## Example 3: Reverse Sorted Array (Worst Case)

**Input:** `[5, 4, 3, 2, 1]`

### Execution

**Pass 1:**
```
[5, 4, 3, 2, 1]
→ [4, 5, 3, 2, 1]  (swap 5, 4)
→ [4, 3, 5, 2, 1]  (swap 5, 3)
→ [4, 3, 2, 5, 1]  (swap 5, 2)
→ [4, 3, 2, 1, 5]  (swap 5, 1)
Result: [4, 3, 2, 1, 5]
```

**Pass 2:**
```
[4, 3, 2, 1, 5]
→ [3, 4, 2, 1, 5]  (swap 4, 3)
→ [3, 2, 4, 1, 5]  (swap 4, 2)
→ [3, 2, 1, 4, 5]  (swap 4, 1)
Result: [3, 2, 1, 4, 5]
```

**Pass 3:**
```
[3, 2, 1, 4, 5]
→ [2, 3, 1, 4, 5]  (swap 3, 2)
→ [2, 1, 3, 4, 5]  (swap 3, 1)
Result: [2, 1, 3, 4, 5]
```

**Pass 4:**
```
[2, 1, 3, 4, 5]
→ [1, 2, 3, 4, 5]  (swap 2, 1)
Result: [1, 2, 3, 4, 5]
```

**Output:** `[1, 2, 3, 4, 5]`

**Statistics:**
- Total passes: 4
- Total comparisons: 10
- Total swaps: 10 (maximum possible)
- Time complexity: O(n²) - worst case

---

## Example 4: Array with Duplicates

**Input:** `[3, 5, 2, 5, 1, 3]`

### Execution

```
Initial: [3, 5, 2, 5, 1, 3]

Pass 1:
[3, 5, 2, 5, 1, 3]
→ [3, 5, 2, 5, 1, 3]  (no swap: 3 < 5)
→ [3, 2, 5, 5, 1, 3]  (swap 5, 2)
→ [3, 2, 5, 5, 1, 3]  (no swap: 5 = 5)
→ [3, 2, 5, 1, 5, 3]  (swap 5, 1)
→ [3, 2, 5, 1, 3, 5]  (swap 5, 3)

Pass 2:
[3, 2, 5, 1, 3, 5]
→ [2, 3, 5, 1, 3, 5]  (swap 3, 2)
→ [2, 3, 5, 1, 3, 5]  (no swap: 3 < 5)
→ [2, 3, 1, 5, 3, 5]  (swap 5, 1)
→ [2, 3, 1, 3, 5, 5]  (swap 5, 3)

Pass 3:
[2, 3, 1, 3, 5, 5]
→ [2, 3, 1, 3, 5, 5]  (no swap: 2 < 3)
→ [2, 1, 3, 3, 5, 5]  (swap 3, 1)
→ [2, 1, 3, 3, 5, 5]  (no swap: 3 = 3)

Pass 4:
[2, 1, 3, 3, 5, 5]
→ [1, 2, 3, 3, 5, 5]  (swap 2, 1)
→ [1, 2, 3, 3, 5, 5]  (no swap: 2 < 3)

Pass 5:
[1, 2, 3, 3, 5, 5]
→ No swaps needed - sorted!
```

**Output:** `[1, 2, 3, 3, 5, 5]`

**Note:** Bubble sort is stable - equal elements maintain their relative order.

---

## Example 5: Single Element and Empty Arrays

### Single Element
**Input:** `[42]`
**Output:** `[42]`
**Explanation:** Already sorted (no comparisons needed)

### Empty Array
**Input:** `[]`
**Output:** `[]`
**Explanation:** Nothing to sort

### Two Elements
**Input:** `[2, 1]`
```
Compare 2 and 1  → Swap → [1, 2]
```
**Output:** `[1, 2]`

---

## Example 6: Sorting Strings

While bubble sort is typically used with numbers, it works with any comparable data:

**Input:** `['dog', 'cat', 'elephant', 'ant', 'bear']`

```
Pass 1:
['dog', 'cat', 'elephant', 'ant', 'bear']
→ ['cat', 'dog', 'elephant', 'ant', 'bear']  (swap: 'dog' > 'cat')
→ ['cat', 'dog', 'elephant', 'ant', 'bear']  (no swap)
→ ['cat', 'dog', 'ant', 'elephant', 'bear']  (swap: 'elephant' > 'ant')
→ ['cat', 'dog', 'ant', 'bear', 'elephant']  (swap: 'elephant' > 'bear')

Pass 2:
['cat', 'dog', 'ant', 'bear', 'elephant']
→ ['cat', 'dog', 'ant', 'bear', 'elephant']  (no swap)
→ ['cat', 'ant', 'dog', 'bear', 'elephant']  (swap: 'dog' > 'ant')
→ ['cat', 'ant', 'bear', 'dog', 'elephant']  (swap: 'dog' > 'bear')

Pass 3:
['cat', 'ant', 'bear', 'dog', 'elephant']
→ ['ant', 'cat', 'bear', 'dog', 'elephant']  (swap: 'cat' > 'ant')
→ ['ant', 'bear', 'cat', 'dog', 'elephant']  (swap: 'cat' > 'bear')

Pass 4:
['ant', 'bear', 'cat', 'dog', 'elephant']
→ No swaps needed - sorted!
```

**Output:** `['ant', 'bear', 'cat', 'dog', 'elephant']`

---

## Example 7: Real-World Application

**Scenario:** Sorting student scores

**Input:**
```
[
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 68 },
  { name: "Eve", score: 90 }
]
```

**Sorting by score (using custom comparator):**

```javascript
bubbleSortCustom(students, (a, b) => a.score - b.score);
```

**Output:**
```
[
  { name: "David", score: 68 },
  { name: "Bob", score: 72 },
  { name: "Alice", score: 85 },
  { name: "Eve", score: 90 },
  { name: "Charlie", score: 95 }
]
```

---

## Complexity Analysis for Examples

| Example | Array Size | Comparisons | Swaps | Passes | Complexity |
|---------|-----------|-------------|-------|--------|------------|
| Basic Sort | 5 | 10 | 4 | 4 | O(n²) |
| Already Sorted | 5 | 4 | 0 | 1 | O(n) |
| Reverse Sorted | 5 | 10 | 10 | 4 | O(n²) |
| With Duplicates | 6 | 15 | 7 | 5 | O(n²) |

---

## Key Takeaways

1. **Bubble sort is simple but inefficient** for large datasets
2. **Best case O(n)** occurs when array is already sorted (with optimization)
3. **Worst case O(n²)** occurs when array is reverse sorted
4. **Stable sort** - maintains relative order of equal elements
5. **In-place** - requires O(1) extra space
6. **Adaptive** - performs well on nearly sorted data with optimization

---

[⬅️ Back to Bubble Sort](README.md)
