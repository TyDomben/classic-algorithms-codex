# Fibonacci Sequence

> Classic recursive problem demonstrating dynamic programming optimization

## Problem Statement

The Fibonacci sequence is defined as:
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) for n > 1

Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

## Approaches & Complexity

| Approach | Time | Space | Description |
|----------|------|-------|-------------|
| Naive Recursive | O(2ⁿ) | O(n) | Exponential - very slow |
| Memoization | O(n) | O(n) | Top-down DP |
| Tabulation | O(n) | O(n) | Bottom-up DP |
| Iterative | O(n) | O(1) | Space-optimized |
| Matrix | O(log n) | O(1) | Advanced |

## Why It's Important

Fibonacci demonstrates:
- Recursion fundamentals
- Exponential complexity pitfalls
- Dynamic programming optimization
- Space-time tradeoffs

## Real-World Applications

- **Nature**: Spiral patterns (shells, flowers)
- **Art**: Golden ratio
- **Computer Science**: Algorithm analysis
- **Finance**: Fibonacci retracements

## Implementations

- [JavaScript](implementation.js)
- [Python](implementation.py)
- [Elixir](implementation.ex)

---

[⬅️ Back to Math](../) | [⬆️ Back to Main](../../../)
