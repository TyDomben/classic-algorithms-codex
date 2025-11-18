# Classic Algorithms Codex

> **The definitive, comprehensive reference for classic programming algorithms and problems**

A beautifully documented collection of 100+ essential algorithms with implementations in JavaScript, Python, and Elixir. Each algorithm includes detailed explanations, complexity analysis, interactive visualizations, and real-world applications.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Algorithms](https://img.shields.io/badge/algorithms-100+-green.svg)](#algorithms)
[![Languages](https://img.shields.io/badge/languages-JS%20%7C%20Python%20%7C%20Elixir-orange.svg)](#implementations)
[![Visualizations](https://img.shields.io/badge/visualizations-interactive-purple.svg)](visualizations/index.html)

---

## Table of Contents

- [Quick Start](#quick-start)
- [Categories](#categories)
  - [Sorting Algorithms](#sorting-algorithms)
  - [Searching Algorithms](#searching-algorithms)
  - [String Manipulation](#string-manipulation)
  - [Array Problems](#array-problems)
  - [Mathematical Problems](#mathematical-problems)
  - [Graph Algorithms](#graph-algorithms)
  - [Tree Algorithms](#tree-algorithms)
  - [Dynamic Programming](#dynamic-programming)
  - [Backtracking](#backtracking)
  - [Greedy Algorithms](#greedy-algorithms)
  - [Classic Problems](#classic-problems)
  - [Advanced Topics](#advanced-topics)
- [Learning Paths](#learning-paths)
- [Visualizations](#visualizations)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start

### Browse Algorithms
```bash
# Clone the repository
git clone https://github.com/yourusername/classic-algorithms-codex.git
cd classic-algorithms-codex

# Open the main index
open README.md

# Or launch the visualization gallery
open visualizations/index.html
```

### Run an Algorithm
```javascript
// JavaScript
node algorithms/sorting/quick-sort/implementation.js
```

```python
# Python
python3 algorithms/sorting/quick-sort/implementation.py
```

```elixir
# Elixir
elixir algorithms/sorting/quick-sort/implementation.ex
```

### Run Tests
```bash
# JavaScript tests
npm test

# Python tests
pytest tests/

# Elixir tests
mix test
```

---

## Categories

### Sorting Algorithms
*Master the art of organizing data efficiently*

**Difficulty:** 🟢 Beginner to 🔴 Advanced

| Algorithm | Time Complexity | Space | Difficulty | Stable |
|-----------|----------------|-------|------------|--------|
| [Bubble Sort](algorithms/sorting/bubble-sort/) | O(n²) | O(1) | 🟢 Easy | Yes |
| [Selection Sort](algorithms/sorting/selection-sort/) | O(n²) | O(1) | 🟢 Easy | No |
| [Insertion Sort](algorithms/sorting/insertion-sort/) | O(n²) | O(1) | 🟢 Easy | Yes |
| [Merge Sort](algorithms/sorting/merge-sort/) | O(n log n) | O(n) | 🟡 Medium | Yes |
| [Quick Sort](algorithms/sorting/quick-sort/) | O(n log n) | O(log n) | 🟡 Medium | No |
| [Heap Sort](algorithms/sorting/heap-sort/) | O(n log n) | O(1) | 🔴 Hard | No |
| [Radix Sort](algorithms/sorting/radix-sort/) | O(nk) | O(n+k) | 🟡 Medium | Yes |
| [Counting Sort](algorithms/sorting/counting-sort/) | O(n+k) | O(k) | 🟡 Medium | Yes |

**Recommended Learning Order:** Bubble → Selection → Insertion → Merge → Quick → Heap → Radix → Counting

---

### Searching Algorithms
*Find what you're looking for, fast*

**Difficulty:** 🟢 Beginner to 🟡 Medium

| Algorithm | Time Complexity | Space | Best For |
|-----------|----------------|-------|----------|
| [Linear Search](algorithms/searching/linear-search/) | O(n) | O(1) | Unsorted data |
| [Binary Search](algorithms/searching/binary-search/) | O(log n) | O(1) | Sorted data |
| [Jump Search](algorithms/searching/jump-search/) | O(√n) | O(1) | Sorted data |
| [Interpolation Search](algorithms/searching/interpolation-search/) | O(log log n) | O(1) | Uniformly distributed |
| [Exponential Search](algorithms/searching/exponential-search/) | O(log n) | O(1) | Unbounded sorted |

**Recommended Learning Order:** Linear → Binary → Jump → Interpolation → Exponential

---

### String Manipulation
*Text processing and pattern matching*

**Difficulty:** 🟢 Easy to 🔴 Hard

| Problem | Difficulty | Common In | LeetCode |
|---------|-----------|-----------|----------|
| [Reverse String](algorithms/strings/reverse-string/) | 🟢 Easy | Warm-ups | #344 |
| [Palindrome Checker](algorithms/strings/palindrome-checker/) | 🟢 Easy | Interviews | #125 |
| [Anagram Detector](algorithms/strings/anagram-detector/) | 🟢 Easy | Interviews | #242 |
| [Caesar Cipher](algorithms/strings/caesar-cipher/) | 🟢 Easy | Cryptography | - |
| [Longest Substring](algorithms/strings/longest-substring/) | 🟡 Medium | Interviews | #3 |
| [Valid Parentheses](algorithms/strings/valid-parentheses/) | 🟢 Easy | Interviews | #20 |
| [String Permutations](algorithms/strings/string-permutations/) | 🟡 Medium | Backtracking | #46 |
| [Edit Distance](algorithms/strings/edit-distance/) | 🔴 Hard | DP | #72 |

---

### Array Problems
*Essential array manipulation techniques*

**Difficulty:** 🟢 Easy to 🟡 Medium

| Problem | Pattern | Difficulty | LeetCode |
|---------|---------|-----------|----------|
| [Two Sum](algorithms/arrays/two-sum/) | Hash Map | 🟢 Easy | #1 |
| [Find Min/Max](algorithms/arrays/find-min-max/) | Linear Scan | 🟢 Easy | - |
| [Rotate Array](algorithms/arrays/rotate-array/) | Reversal | 🟡 Medium | #189 |
| [Merge Sorted Arrays](algorithms/arrays/merge-sorted-arrays/) | Two Pointers | 🟢 Easy | #88 |
| [Remove Duplicates](algorithms/arrays/remove-duplicates/) | Two Pointers | 🟢 Easy | #26 |
| [Missing Number](algorithms/arrays/missing-number/) | Math/XOR | 🟢 Easy | #268 |
| [Kadane's Algorithm](algorithms/arrays/kadanes-algorithm/) | DP | 🟡 Medium | #53 |

---

### Mathematical Problems
*Number theory and mathematical algorithms*

**Difficulty:** 🟢 Easy to 🟡 Medium

| Algorithm | Applications | Difficulty | Approach |
|-----------|--------------|-----------|----------|
| [Fibonacci](algorithms/math/fibonacci/) | Sequences, Nature | 🟢 Easy | Recursion/DP |
| [Factorial](algorithms/math/factorial/) | Combinatorics | 🟢 Easy | Recursion/Iteration |
| [Prime Checker](algorithms/math/prime-checker/) | Cryptography | 🟢 Easy | Trial Division |
| [GCD & LCM](algorithms/math/gcd-lcm/) | Number Theory | 🟢 Easy | Euclidean Algorithm |
| [Power Function](algorithms/math/power-function/) | Exponentiation | 🟡 Medium | Fast Exponentiation |
| [Square Root](algorithms/math/square-root/) | Numerical Methods | 🟡 Medium | Newton's Method |
| [Pascal's Triangle](algorithms/math/pascals-triangle/) | Combinatorics | 🟢 Easy | DP |
| [Sieve of Eratosthenes](algorithms/math/sieve-eratosthenes/) | Prime Generation | 🟡 Medium | Sieve |

---

### Graph Algorithms
*Navigate and analyze connected data*

**Difficulty:** 🟡 Medium to 🔴 Hard

#### Traversal
- [Depth-First Search (DFS)](algorithms/graphs/dfs/) - 🟡 Medium
- [Breadth-First Search (BFS)](algorithms/graphs/bfs/) - 🟡 Medium

#### Shortest Path
- [Dijkstra's Algorithm](algorithms/graphs/dijkstra/) - 🔴 Hard
- [Bellman-Ford Algorithm](algorithms/graphs/bellman-ford/) - 🔴 Hard
- [Floyd-Warshall Algorithm](algorithms/graphs/floyd-warshall/) - 🔴 Hard

#### Minimum Spanning Tree
- [Prim's Algorithm](algorithms/graphs/prims-algorithm/) - 🔴 Hard
- [Kruskal's Algorithm](algorithms/graphs/kruskals-algorithm/) - 🔴 Hard

#### Other
- [Topological Sort](algorithms/graphs/topological-sort/) - 🟡 Medium

---

### Tree Algorithms
*Hierarchical data structures*

**Difficulty:** 🟡 Medium to 🔴 Hard

| Algorithm | Type | Difficulty | Use Case |
|-----------|------|-----------|----------|
| [Binary Tree Traversal](algorithms/trees/binary-tree-traversal/) | Traversal | 🟡 Medium | Tree navigation |
| [BST Operations](algorithms/trees/bst-operations/) | Data Structure | 🟡 Medium | Ordered data |
| [AVL Tree](algorithms/trees/avl-tree/) | Self-Balancing | 🔴 Hard | Balanced BST |
| [Red-Black Tree](algorithms/trees/red-black-tree/) | Self-Balancing | 🔴 Hard | Balanced BST |
| [Trie](algorithms/trees/trie/) | Prefix Tree | 🟡 Medium | Autocomplete |
| [Segment Tree](algorithms/trees/segment-tree/) | Range Queries | 🔴 Hard | Range operations |

---

### Dynamic Programming
*Optimize by remembering*

**Difficulty:** 🟡 Medium to 🔴 Hard

| Problem | Pattern | Difficulty | LeetCode |
|---------|---------|-----------|----------|
| [0/1 Knapsack](algorithms/dynamic-programming/knapsack/) | Optimization | 🔴 Hard | #416 |
| [Longest Common Subsequence](algorithms/dynamic-programming/longest-common-subsequence/) | String DP | 🟡 Medium | #1143 |
| [Edit Distance](algorithms/dynamic-programming/edit-distance/) | String DP | 🔴 Hard | #72 |
| [Coin Change](algorithms/dynamic-programming/coin-change/) | Unbounded Knapsack | 🟡 Medium | #322 |
| [Matrix Chain Multiplication](algorithms/dynamic-programming/matrix-chain-multiplication/) | Optimization | 🔴 Hard | - |
| [Longest Increasing Subsequence](algorithms/dynamic-programming/longest-increasing-subsequence/) | Sequence DP | 🟡 Medium | #300 |

---

### Backtracking
*Explore all possibilities systematically*

**Difficulty:** 🟡 Medium to 🔴 Hard

| Problem | Difficulty | LeetCode | Classic |
|---------|-----------|----------|---------|
| [N-Queens](algorithms/backtracking/n-queens/) | 🔴 Hard | #51 | ✓ |
| [Sudoku Solver](algorithms/backtracking/sudoku-solver/) | 🔴 Hard | #37 | ✓ |
| [Rat in a Maze](algorithms/backtracking/rat-in-maze/) | 🟡 Medium | - | ✓ |
| [Word Search](algorithms/backtracking/word-search/) | 🟡 Medium | #79 | ✓ |
| [Permutations](algorithms/backtracking/permutations/) | 🟡 Medium | #46 | ✓ |

---

### Greedy Algorithms
*Make locally optimal choices*

**Difficulty:** 🟡 Medium

| Algorithm | Use Case | Difficulty |
|-----------|----------|-----------|
| [Activity Selection](algorithms/greedy/activity-selection/) | Scheduling | 🟡 Medium |
| [Huffman Coding](algorithms/greedy/huffman-coding/) | Compression | 🟡 Medium |
| [Fractional Knapsack](algorithms/greedy/fractional-knapsack/) | Optimization | 🟡 Medium |
| [Job Sequencing](algorithms/greedy/job-sequencing/) | Scheduling | 🟡 Medium |

---

### Classic Problems
*Timeless programming challenges*

| Problem | Difficulty | Why It's Classic |
|---------|-----------|------------------|
| [FizzBuzz](algorithms/classics/fizzbuzz/) | 🟢 Easy | Interview staple |
| [Towers of Hanoi](algorithms/classics/towers-of-hanoi/) | 🟡 Medium | Recursion masterclass |
| [Conway's Game of Life](algorithms/classics/conways-game-of-life/) | 🟡 Medium | Cellular automata |
| [Monty Hall Problem](algorithms/classics/monty-hall/) | 🟢 Easy | Probability paradox |
| [99 Bottles](algorithms/classics/99-bottles/) | 🟢 Easy | Loop practice |
| [Hello World](algorithms/classics/hello-world/) | 🟢 Easy | Where it all begins |

---

### Advanced Topics
*For the ambitious*

**Difficulty:** 🔴 Hard

- [LRU Cache](algorithms/advanced/lru-cache/) - Cache implementation
- [Trie Autocomplete](algorithms/advanced/trie-autocomplete/) - Search suggestions
- [Bloom Filter](algorithms/advanced/bloom-filter/) - Probabilistic data structure
- [Union-Find](algorithms/advanced/union-find/) - Disjoint set
- [B-Tree](algorithms/advanced/b-tree/) - Database indexing

---

## Learning Paths

### 🌱 Beginner Path (20 Essential Algorithms)
*Start here if you're new to algorithms*

**Week 1-2: Foundations**
1. Hello World
2. FizzBuzz
3. Reverse String
4. Palindrome Checker
5. Factorial
6. Fibonacci

**Week 3-4: Basic Data Structures**
7. Linear Search
8. Binary Search
9. Bubble Sort
10. Insertion Sort
11. Two Sum
12. Remove Duplicates

**Week 5-6: Problem Solving**
13. Valid Parentheses
14. Merge Sorted Arrays
15. Missing Number
16. Prime Checker
17. GCD & LCM

**Week 7-8: Introduction to Trees & Graphs**
18. Binary Tree Traversal
19. DFS (Graphs)
20. BFS (Graphs)

---

### 💼 Interview Prep Path (50 Common Problems)
*Ace your technical interviews*

**Arrays & Strings (15 problems)**
- Two Sum, Three Sum
- Longest Substring
- Valid Parentheses
- Anagram Detector
- String Permutations
- Rotate Array
- Kadane's Algorithm
- And more...

**Sorting & Searching (10 problems)**
- Binary Search variants
- Merge Sort
- Quick Sort
- And more...

**Trees & Graphs (15 problems)**
- Tree Traversals
- BST Operations
- DFS/BFS
- Shortest Path
- And more...

**Dynamic Programming (10 problems)**
- Fibonacci (DP approach)
- Climbing Stairs
- Coin Change
- Longest Common Subsequence
- And more...

---

### 🚀 Advanced Path (30 Complex Algorithms)
*Deep dive into computer science*

**Advanced Data Structures**
- AVL Trees
- Red-Black Trees
- Segment Trees
- Tries
- B-Trees

**Graph Algorithms**
- Dijkstra's
- Bellman-Ford
- Floyd-Warshall
- Prim's & Kruskal's
- Topological Sort

**Dynamic Programming Masters**
- Knapsack variants
- Matrix Chain Multiplication
- Edit Distance
- Longest Increasing Subsequence

**Advanced Topics**
- LRU Cache
- Bloom Filters
- Union-Find
- And more...

---

## Visualizations

🎨 **[Interactive Visualization Gallery](visualizations/index.html)**

Every algorithm comes with an interactive visualization:
- **Step-through controls** - Play, pause, step forward/back
- **Speed control** - Watch at your own pace
- **Custom input** - Test with your own data
- **Color-coded** - See what's happening at each step
- **Mobile responsive** - Learn anywhere
- **Export functionality** - Save and share

**Filter by:**
- Category (Sorting, Searching, etc.)
- Difficulty (Easy, Medium, Hard)
- Complexity (O(n), O(log n), etc.)

---

## Documentation

### 📚 Learning Resources

- **[Big-O Cheat Sheet](docs/big-o-cheatsheet.md)** - Visual complexity guide
- **[Complexity Analysis Guide](docs/complexity-guide.md)** - Master time/space analysis
- **[Problem Solving Patterns](docs/problem-solving-patterns.md)** - Common techniques
- **[Interview Preparation Guide](docs/interview-prep-guide.md)** - Ace your interviews

### 🎯 Quick References

**Time Complexity Cheat Sheet:**
```
O(1)        - Constant      - Hash table lookup
O(log n)    - Logarithmic   - Binary search
O(n)        - Linear        - Linear search
O(n log n)  - Linearithmic  - Merge sort, Quick sort
O(n²)       - Quadratic     - Bubble sort, Nested loops
O(2ⁿ)       - Exponential   - Recursive fibonacci
O(n!)       - Factorial     - Permutations
```

---

## What Makes Each Algorithm Complete?

Every algorithm in this codex includes:

### 📄 README.md
- Clear problem statement
- Visual examples
- Complexity analysis (time & space)
- When to use it
- Pros and cons
- Real-world applications
- Step-by-step walkthrough
- Common pitfalls
- Related algorithms
- External resources

### 💻 Implementations
- **JavaScript (ES6+)** - Modern, clean syntax
- **Python 3** - Pythonic with type hints
- **Elixir** - Functional programming approach
- Extensive comments explaining each step
- Multiple approaches (iterative vs recursive)
- Edge case handling

### 🎨 Interactive Visualization
- HTML5 Canvas/SVG based
- Step-through controls
- Speed adjustment
- Custom input
- Color-coded execution
- Mobile responsive

### ✅ Tests
- Comprehensive test suites
- Edge cases covered
- Performance benchmarks
- Expected vs actual validation

### 📝 Examples
- 3-5 practical examples
- Input → Process → Output
- Execution traces

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](docs/contributing.md) for guidelines.

**Ways to contribute:**
- 🐛 Report bugs
- 💡 Suggest new algorithms
- 📝 Improve documentation
- 🎨 Enhance visualizations
- ✅ Add more tests
- 🌍 Translate to other languages

---

## Project Structure

```
classic-algorithms-codex/
├── README.md (you are here)
├── algorithms/
│   ├── sorting/
│   ├── searching/
│   ├── strings/
│   ├── arrays/
│   ├── math/
│   ├── graphs/
│   ├── trees/
│   ├── dynamic-programming/
│   ├── backtracking/
│   ├── greedy/
│   ├── classics/
│   └── advanced/
├── visualizations/
│   ├── index.html (gallery)
│   ├── shared-styles.css
│   └── visualization-framework.js
├── docs/
│   ├── complexity-guide.md
│   ├── big-o-cheatsheet.md
│   ├── problem-solving-patterns.md
│   ├── interview-prep-guide.md
│   └── contributing.md
└── tests/
```

---

## Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
- **Visualizations:** Canvas API, SVG
- **No dependencies** - Pure, portable code
- **Static site** - No backend required
- **GitHub Pages ready** - Easy deployment

---

## License

MIT License - See [LICENSE](LICENSE) file for details

---

## Acknowledgments

Built with ❤️ for developers, students, and lifelong learners.

**Resources:**
- [Introduction to Algorithms (CLRS)](https://mitpress.mit.edu/9780262046305/)
- [LeetCode](https://leetcode.com/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)
- [Visualgo](https://visualgo.net/)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

---

## Progress Tracker

Track your learning journey:

```
☐ Beginner Path (0/20)
☐ Interview Prep Path (0/50)
☐ Advanced Path (0/30)
☐ All Algorithms Mastered (0/100+)
```

---

**Start your journey:** Pick a [learning path](#learning-paths) or dive into a [category](#categories)!

**Have questions?** Open an issue or check the [documentation](#documentation).

**Happy coding!** 🚀
