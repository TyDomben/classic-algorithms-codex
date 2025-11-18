# Quick Reference Card

Fast lookup for common operations and complexities.

## Complexity Classes (Fastest to Slowest)

| Notation | Name | Example | n=1000 |
|----------|------|---------|--------|
| O(1) | Constant | Array access | 1 |
| O(log n) | Logarithmic | Binary search | 10 |
| O(n) | Linear | Linear search | 1,000 |
| O(n log n) | Linearithmic | Merge sort | 10,000 |
| O(n²) | Quadratic | Bubble sort | 1,000,000 |
| O(2ⁿ) | Exponential | Naive Fibonacci | Impractical |
| O(n!) | Factorial | Permutations | Impossible |

## Common Data Structure Operations

| Operation | Array | Linked List | Hash Table | BST (avg) | BST (worst) |
|-----------|-------|-------------|------------|-----------|-------------|
| Access | O(1) | O(n) | - | O(log n) | O(n) |
| Search | O(n) | O(n) | O(1) | O(log n) | O(n) |
| Insert | O(n) | O(1) | O(1) | O(log n) | O(n) |
| Delete | O(n) | O(1) | O(1) | O(log n) | O(n) |

## Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

## Problem-Solving Patterns

| Pattern | When to Use | Example |
|---------|-------------|---------|
| Two Pointers | Sorted array, finding pairs | Two Sum (sorted) |
| Sliding Window | Contiguous subarray | Max sum subarray |
| Fast & Slow | Cycle detection | Linked list cycle |
| Binary Search | Sorted data | Find element |
| BFS | Level-order, shortest path | Tree level order |
| DFS | Path problems, exploration | All paths |
| Dynamic Programming | Overlapping subproblems | Fibonacci, Knapsack |
| Backtracking | All combinations | N-Queens |
| Greedy | Optimal local choices | Activity selection |

## Quick Commands

```bash
# Run all tests
npm test

# Run specific test
node algorithms/sorting/bubble-sort/tests.js

# Run Python implementation
python3 algorithms/sorting/bubble-sort/implementation.py

# Start local server for visualizations
python3 -m http.server 8000
```

## Keyboard Shortcuts (Visualizations)

- `Space` - Play/Pause
- `→` - Step Forward
- `←` - Step Backward
- `R` - Reset

## File Structure

```
algorithm-name/
├── README.md          ← Theory & explanation
├── implementation.js  ← JavaScript code
├── implementation.py  ← Python code
├── implementation.ex  ← Elixir code
├── visualization.html ← Interactive demo
├── tests.js          ← Test suite
└── examples.md       ← Walkthroughs
```

## Where to Find Things

- **Algorithms:** `algorithms/category/name/`
- **Docs:** `docs/`
- **Visualizations:** `visualizations/`
- **Tests:** Each algorithm folder
- **Guides:** Root directory (GETTING_STARTED.md, etc.)

## Common Interview Problems

| Problem | Pattern | Difficulty | Solution |
|---------|---------|-----------|----------|
| Two Sum | Hash Map | Easy | [Link](algorithms/arrays/two-sum/) |
| Valid Parentheses | Stack | Easy | [Link](algorithms/strings/valid-parentheses/) |
| Binary Search | Divide & Conquer | Easy | [Link](algorithms/searching/binary-search/) |
| Merge Sort | Divide & Conquer | Medium | [Link](algorithms/sorting/merge-sort/) |
| Fibonacci | DP | Easy/Medium | [Link](algorithms/math/fibonacci/) |
| Longest Substring | Sliding Window | Medium | [Link](algorithms/strings/longest-substring/) |

## Study Schedule

| Week | Focus | Algorithms |
|------|-------|------------|
| 1-2 | Arrays & Strings | 6 algorithms |
| 3-4 | Sorting & Searching | 8 algorithms |
| 5-6 | Trees & Graphs | 10 algorithms |
| 7-8 | DP & Advanced | 6+ algorithms |

## Tips

- ✅ Understand before memorizing
- ✅ Code it yourself
- ✅ Use visualizations
- ✅ Practice daily
- ✅ Learn complexity analysis
- ✅ Study patterns, not problems

## Resources

- [Full Documentation](README.md)
- [Getting Started](GETTING_STARTED.md)
- [Testing Guide](TESTING.md)
- [Interview Prep](docs/interview-prep-guide.md)
- [Big-O Cheat Sheet](docs/big-o-cheatsheet.md)
- [Problem Patterns](docs/problem-solving-patterns.md)
