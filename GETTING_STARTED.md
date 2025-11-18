# Getting Started with Classic Algorithms Codex

Welcome! This guide will help you get the most out of this comprehensive algorithm reference.

## Quick Start (5 Minutes)

### 1. Browse the Main Index
Start with [README.md](README.md) to see all 100+ algorithms organized by category.

### 2. Pick a Learning Path
Choose based on your goal:
- **Learning Algorithms?** → Start with [Beginner Path](README.md#-beginner-path-20-essential-algorithms)
- **Interview Prep?** → Follow [Interview Prep Path](README.md#-interview-prep-path-50-common-problems)
- **Advanced Study?** → Jump to [Advanced Path](README.md#-advanced-path-30-complex-algorithms)

### 3. Try an Algorithm
Let's start with Bubble Sort:

```bash
# View the README
cat algorithms/sorting/bubble-sort/README.md

# Run JavaScript implementation
node algorithms/sorting/bubble-sort/implementation.js

# Run Python implementation
python3 algorithms/sorting/bubble-sort/implementation.py

# Open interactive visualization
open algorithms/sorting/bubble-sort/visualization.html
# (or double-click the file in your file browser)
```

### 4. Explore Visualizations
Open the visualization gallery:
```bash
open visualizations/index.html
```

Filter by category, difficulty, or search for specific algorithms!

---

## Understanding the Structure

### Each Algorithm Includes:

```
algorithms/category/algorithm-name/
├── README.md                 ← Start here! Full explanation
├── implementation.js         ← JavaScript code
├── implementation.py         ← Python code
├── implementation.ex         ← Elixir code (optional)
├── visualization.html        ← Interactive demo
├── tests.js                  ← Test suite
├── examples.md              ← Walkthroughs
```

### Recommended Learning Flow:

1. **Read README.md** - Understand the concept
2. **Study one implementation** - Pick your preferred language
3. **Watch visualization** - See it in action
4. **Read examples** - See step-by-step execution
5. **Run tests** - Verify understanding
6. **Code it yourself** - Practice makes perfect!

---

## Installation & Requirements

### Prerequisites

**Required:**
- **Node.js** 14+ (for JavaScript)
- **Python** 3.8+ (for Python)

**Optional:**
- **Elixir** 1.12+ (for Elixir implementations)
- Modern web browser (for visualizations)

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/classic-algorithms-codex.git
cd classic-algorithms-codex

# No installation needed! All code is standalone.
# Just start exploring.
```

### Running Code

**JavaScript:**
```bash
node algorithms/sorting/bubble-sort/implementation.js
```

**Python:**
```bash
python3 algorithms/sorting/bubble-sort/implementation.py
```

**Elixir:**
```bash
elixir algorithms/sorting/bubble-sort/implementation.ex
```

### Running Tests

**All JavaScript Tests:**
```bash
npm test
# or
node run-all-tests.js
```

**Specific Algorithm:**
```bash
node algorithms/sorting/bubble-sort/tests.js
```

**Python Tests:**
```bash
python3 algorithms/sorting/bubble-sort/implementation.py
# (doctests run automatically)
```

---

## How to Use Visualizations

### Option 1: Local Files
Simply double-click any `visualization.html` file in your file browser.

### Option 2: Local Server (Recommended)
For best experience, serve via HTTP:

```bash
# Python
python3 -m http.server 8000

# Then open: http://localhost:8000
```

### Visualization Controls

- **▶️ Play** - Auto-step through algorithm
- **⏸ Pause** - Stop playback
- **⏪ Step Back** - Go to previous step
- **⏩ Step Forward** - Go to next step
- **⏮ Reset** - Return to start
- **Speed Slider** - Adjust playback speed (0.1x - 5x)
- **Step Slider** - Jump to any step

### Keyboard Shortcuts

- `Space` - Play/Pause
- `→` - Step Forward
- `←` - Step Backward
- `R` - Reset

---

## Learning Paths Explained

### 🌱 Beginner Path (Weeks 1-8)

**Goal:** Build strong foundations

**Week 1-2:** Arrays & Strings
- Hello World
- FizzBuzz
- Reverse String
- Palindrome
- Two Sum

**Week 3-4:** Basic Algorithms
- Bubble Sort
- Binary Search
- Factorial
- Fibonacci

**Week 5-6:** Data Structures
- Linked Lists
- Stacks
- Queues
- Trees (basic)

**Week 7-8:** Introduction to Graphs
- BFS
- DFS

### 💼 Interview Prep Path (4-8 Weeks)

**Goal:** Pass technical interviews

**Focus Areas:**
1. Pattern Recognition (15 patterns)
2. Common Problems (50 LeetCode-style)
3. Complexity Analysis
4. Communication Skills

**Study Materials:**
- [Interview Prep Guide](docs/interview-prep-guide.md)
- [Problem-Solving Patterns](docs/problem-solving-patterns.md)
- [Big-O Cheat Sheet](docs/big-o-cheatsheet.md)

### 🚀 Advanced Path (Self-Paced)

**Goal:** Master computer science

**Topics:**
- Advanced Data Structures
- Graph Algorithms
- Dynamic Programming
- Advanced Trees
- Optimization Techniques

---

## Tips for Success

### 1. **Practice Actively**
Don't just read - code it yourself!

### 2. **Use Visualizations**
Seeing algorithms in action builds intuition

### 3. **Understand, Don't Memorize**
Focus on "why" not just "how"

### 4. **Study Complexity**
Always analyze time and space

### 5. **Compare Approaches**
Most algorithms have multiple implementations

### 6. **Test Edge Cases**
Empty inputs, single elements, large datasets

### 7. **Join the Community**
Contribute improvements, ask questions

---

## Common Questions

### Q: Which language should I learn first?
**A:** Start with JavaScript or Python - both have great support here. Elixir is optional for functional programming enthusiasts.

### Q: Do I need to learn all 100+ algorithms?
**A:** No! Start with your chosen learning path. Quality > Quantity.

### Q: How long does it take to learn an algorithm?
**A:**
- **Simple algorithms:** 30-60 minutes
- **Medium algorithms:** 1-2 hours
- **Complex algorithms:** 3-5 hours

### Q: Should I code everything from scratch?
**A:** Yes! Reading is not enough. Code each algorithm at least once.

### Q: What if I don't understand something?
**A:**
1. Watch the visualization
2. Read examples.md step-by-step
3. Check external resources in README
4. Ask in discussions/issues

### Q: Can I use this for interview prep?
**A:** Absolutely! Follow the [Interview Prep Guide](docs/interview-prep-guide.md) for an 8-week study plan.

---

## Next Steps

### Beginners:
1. ✅ Read [Big-O Cheat Sheet](docs/big-o-cheatsheet.md)
2. ✅ Complete [Bubble Sort](algorithms/sorting/bubble-sort/)
3. ✅ Complete [Binary Search](algorithms/searching/binary-search/)
4. ✅ Try [FizzBuzz](algorithms/classics/fizzbuzz/)

### Interview Prep:
1. ✅ Read [Interview Prep Guide](docs/interview-prep-guide.md)
2. ✅ Study [Problem-Solving Patterns](docs/problem-solving-patterns.md)
3. ✅ Practice 2-3 problems daily
4. ✅ Use visualizations to explain your approach

### Contributors:
1. ✅ Read [Contributing Guide](docs/contributing.md)
2. ✅ Pick an unimplemented algorithm
3. ✅ Follow the Bubble Sort template
4. ✅ Submit a pull request

---

## Need Help?

- 📖 **Documentation:** Check [docs/](docs/) folder
- 🎨 **Visualizations:** Open [visualizations/index.html](visualizations/index.html)
- 🐛 **Issues:** Report at GitHub Issues
- 💬 **Discussions:** Ask questions in GitHub Discussions

---

## Resources

### In This Repo:
- [Main Index](README.md)
- [Big-O Cheat Sheet](docs/big-o-cheatsheet.md)
- [Complexity Guide](docs/complexity-guide.md)
- [Problem-Solving Patterns](docs/problem-solving-patterns.md)
- [Interview Prep Guide](docs/interview-prep-guide.md)
- [Contributing Guide](docs/contributing.md)

### External:
- [LeetCode](https://leetcode.com/) - Practice problems
- [Visualgo](https://visualgo.net/) - More visualizations
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)

---

**Ready to start?** Pick an algorithm from the [main index](README.md) and dive in!

**Questions?** Check the [docs](docs/) or open an issue.

**Happy learning!** 🚀
