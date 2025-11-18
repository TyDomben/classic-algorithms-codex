# Contributing to Classic Algorithms Codex

Thank you for your interest in contributing! This project aims to be the most comprehensive, well-documented algorithm reference available. Every contribution helps make that vision a reality.

## Table of Contents
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Adding a New Algorithm](#adding-a-new-algorithm)
- [Code Style Guidelines](#code-style-guidelines)
- [Documentation Standards](#documentation-standards)
- [Visualization Guidelines](#visualization-guidelines)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Community Guidelines](#community-guidelines)

---

## How Can I Contribute?

### 🐛 Report Bugs
Found a bug in an implementation? Please open an issue with:
- Algorithm name
- Language (JavaScript, Python, or Elixir)
- Input that causes the bug
- Expected vs actual output
- Error messages (if any)

### 💡 Suggest New Algorithms
Want to see an algorithm added? Open an issue with:
- Algorithm name
- Brief description
- Why it's valuable to include
- Reference links (Wikipedia, papers, etc.)

### 📝 Improve Documentation
Help make explanations clearer:
- Fix typos or grammatical errors
- Add more examples
- Improve complexity explanations
- Add real-world use cases

### 🎨 Enhance Visualizations
Make visualizations more interactive:
- Improve UI/UX
- Add new controls
- Optimize performance
- Add accessibility features

### 💻 Add Implementations
Implement algorithms in:
- JavaScript, Python, or Elixir
- Additional languages (propose first)
- Alternative approaches (iterative vs recursive)

### ✅ Add Tests
Expand test coverage:
- Edge cases
- Performance benchmarks
- Stress tests

---

## Getting Started

### 1. Fork the Repository
```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/classic-algorithms-codex.git
cd classic-algorithms-codex
```

### 2. Create a Branch
```bash
git checkout -b feature/algorithm-name
# or
git checkout -b fix/bug-description
```

### 3. Make Your Changes
Follow the guidelines in this document.

### 4. Test Your Changes
Ensure all implementations work correctly.

### 5. Commit and Push
```bash
git add .
git commit -m "Add: Quick sort implementation in Python"
git push origin feature/algorithm-name
```

### 6. Create Pull Request
Open a PR from your fork to the main repository.

---

## Adding a New Algorithm

### Complete Algorithm Structure

Every algorithm must have:

```
algorithms/category/algorithm-name/
├── README.md                    (Required)
├── implementation.js            (Required)
├── implementation.py            (Required)
├── implementation.ex            (Required - Elixir)
├── visualization.html           (Required)
├── tests.js                     (Required)
├── tests.py                     (Required)
├── test.exs                     (Required - Elixir)
└── examples.md                  (Required)
```

### Step-by-Step Process

#### 1. Create Directory Structure
```bash
mkdir -p algorithms/category/algorithm-name
cd algorithms/category/algorithm-name
```

#### 2. Create README.md

Use this template:

```markdown
# Algorithm Name

> Brief one-line description

## Problem Statement

Clear description of what the algorithm does and why it's useful.

## Visual Example

```
Show a visual representation with ASCII art or description
```

## How It Works

Step-by-step explanation:

1. Step one
2. Step two
3. Step three

### Example Walkthrough

```
Input: [example input]
Step 1: [what happens]
Step 2: [what happens]
Output: [result]
```

## Complexity Analysis

### Time Complexity
- **Best Case:** O(?) - When?
- **Average Case:** O(?) - Typically
- **Worst Case:** O(?) - When?

### Space Complexity
- O(?) - Explanation

## When to Use

✅ **Use when:**
- Situation 1
- Situation 2

❌ **Avoid when:**
- Situation 1
- Situation 2

## Pros and Cons

### Advantages
- Advantage 1
- Advantage 2

### Disadvantages
- Disadvantage 1
- Disadvantage 2

## Real-World Applications

1. **Application 1** - Description
2. **Application 2** - Description

## Common Pitfalls

1. **Pitfall 1** - How to avoid
2. **Pitfall 2** - How to avoid

## Variations

- Variation 1
- Variation 2

## Related Algorithms

- [Related Algorithm 1](../related-algorithm/)
- [Related Algorithm 2](../related-algorithm/)

## External Resources

- [Wikipedia](https://en.wikipedia.org/wiki/...)
- [GeeksforGeeks](https://www.geeksforgeeks.org/...)
- [LeetCode Problems](#) - Related practice problems

## Implementations

- [JavaScript](implementation.js)
- [Python](implementation.py)
- [Elixir](implementation.ex)
- [Visualization](visualization.html)

---

[⬅️ Back to Category](../) | [⬆️ Back to Main](../../../)
```

#### 3. Implement in JavaScript

**Template:**

```javascript
/**
 * Algorithm Name
 *
 * Brief description
 *
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 *
 * @param {Type} param - Description
 * @return {Type} - Description
 */
function algorithmName(param) {
  // Edge cases
  if (param === null || param === undefined) {
    return null;
  }

  // Main logic with detailed comments
  // Explain WHY, not just WHAT

  return result;
}

// Alternative approach (if applicable)
function algorithmNameIterative(param) {
  // Different approach
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { algorithmName, algorithmNameIterative };
}

// Example usage
if (require.main === module) {
  console.log('Example 1:');
  console.log(algorithmName(exampleInput));

  console.log('\nExample 2:');
  console.log(algorithmName(exampleInput2));
}
```

#### 4. Implement in Python

**Template:**

```python
"""
Algorithm Name

Brief description

Time Complexity: O(?)
Space Complexity: O(?)
"""

from typing import List, Optional

def algorithm_name(param: List[int]) -> Optional[int]:
    """
    Algorithm description.

    Args:
        param: Description of parameter

    Returns:
        Description of return value

    Examples:
        >>> algorithm_name([1, 2, 3])
        expected_output

        >>> algorithm_name([])
        expected_output
    """
    # Edge cases
    if not param:
        return None

    # Main logic with detailed comments
    # Explain WHY, not just WHAT

    return result


def algorithm_name_iterative(param: List[int]) -> Optional[int]:
    """Alternative iterative approach."""
    pass


if __name__ == '__main__':
    # Example usage
    print('Example 1:')
    print(algorithm_name([1, 2, 3]))

    print('\nExample 2:')
    print(algorithm_name([4, 5, 6]))

    # Run doctests
    import doctest
    doctest.testmod()
```

#### 5. Implement in Elixir

**Template:**

```elixir
defmodule AlgorithmName do
  @moduledoc """
  Algorithm Name

  Brief description

  Time Complexity: O(?)
  Space Complexity: O(?)
  """

  @doc """
  Algorithm description.

  ## Examples

      iex> AlgorithmName.solve([1, 2, 3])
      expected_output

      iex> AlgorithmName.solve([])
      nil
  """
  def solve(param) when is_list(param) do
    # Edge cases
    if Enum.empty?(param) do
      nil
    else
      # Main logic with pattern matching
      do_solve(param)
    end
  end

  defp do_solve(param) do
    # Implementation
  end

  # Alternative approach
  def solve_iterative(param) do
    # Different approach
  end
end

# Example usage
IO.puts("Example 1:")
IO.inspect(AlgorithmName.solve([1, 2, 3]))

IO.puts("\nExample 2:")
IO.inspect(AlgorithmName.solve([4, 5, 6]))
```

#### 6. Create Visualization

Use the shared framework:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Algorithm Name - Visualization</title>
  <link rel="stylesheet" href="../../../visualizations/shared-styles.css">
</head>
<body>
  <div class="container">
    <a href="../README.md" class="back-link">← Back to Algorithm</a>

    <h1>Algorithm Name Visualization</h1>
    <p>Interactive step-by-step visualization</p>

    <!-- Info Panel -->
    <div class="info-panel">
      <div class="info-grid">
        <div class="info-item">
          <h4>Time Complexity</h4>
          <div class="value">O(?)</div>
        </div>
        <div class="info-item">
          <h4>Space Complexity</h4>
          <div class="value">O(?)</div>
        </div>
        <div class="info-item">
          <h4>Current Step</h4>
          <div class="value" id="current-step">0</div>
        </div>
      </div>
    </div>

    <!-- Canvas -->
    <canvas id="visualization-canvas"></canvas>

    <!-- Controls -->
    <div id="controls"></div>

    <!-- Custom Input -->
    <div class="input-section">
      <h3>Custom Input</h3>
      <div class="input-group">
        <input type="text" id="custom-input" placeholder="Enter values (comma-separated)">
        <button class="btn btn-primary" id="run-custom">Run</button>
      </div>
    </div>

    <!-- Step Description -->
    <div class="step-description" id="step-description">
      <h3>Current Step</h3>
      <p id="step-text">Click play to start visualization</p>
    </div>

    <!-- Legend -->
    <div class="legend">
      <h3>Legend</h3>
      <div class="legend-items">
        <div class="legend-item">
          <div class="legend-color" style="background-color: var(--color-primary);"></div>
          <span>Default</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background-color: var(--color-comparing);"></div>
          <span>Comparing</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background-color: var(--color-sorted);"></div>
          <span>Sorted</span>
        </div>
      </div>
    </div>
  </div>

  <script src="../../../visualizations/visualization-framework.js"></script>
  <script>
    // Generate steps for visualization
    function generateSteps(input) {
      const steps = [];
      // Create step-by-step breakdown
      return steps;
    }

    // Initialize visualization
    const viz = new VisualizationFramework('visualization-canvas', {
      width: 800,
      height: 400,
      renderCallback: (ctx, step, framework) => {
        // Custom rendering logic
        framework.drawArray(step.array, 50, 100, 700, 200, {
          showValues: true,
          showIndices: true
        });

        // Update step description
        document.getElementById('step-text').textContent = step.description;
      }
    });

    const controls = new ControlPanel('controls', viz);

    // Example data
    const exampleData = [5, 2, 8, 1, 9];
    const steps = generateSteps(exampleData);
    viz.initialize(steps);

    // Custom input handler
    document.getElementById('run-custom').addEventListener('click', () => {
      const input = document.getElementById('custom-input').value;
      const arr = input.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
      if (arr.length > 0) {
        const steps = generateSteps(arr);
        viz.initialize(steps);
      }
    });
  </script>
</body>
</html>
```

---

## Code Style Guidelines

### JavaScript
- Use ES6+ features
- Use `const` and `let`, avoid `var`
- Use meaningful variable names
- Add JSDoc comments
- No external dependencies (vanilla JS only)
- 2-space indentation

### Python
- Follow PEP 8
- Use type hints
- Add docstrings
- Use snake_case for functions/variables
- 4-space indentation

### Elixir
- Follow Elixir style guide
- Use pattern matching
- Add @doc module attributes
- Use snake_case for functions
- 2-space indentation

### Universal Rules
- Explain WHY, not just WHAT
- Handle edge cases
- Use descriptive names (`leftPointer` not `i`)
- Keep functions focused and small
- Optimize for readability

---

## Documentation Standards

### README Requirements
- Clear problem statement
- Visual examples
- Detailed complexity analysis
- Real-world applications
- Common pitfalls
- External resources

### Code Comments
- Explain complex logic
- Describe time/space complexity
- Note edge cases
- Reference algorithms/techniques used

### Examples
- Provide 3-5 examples
- Include edge cases
- Show step-by-step execution

---

## Testing Requirements

### JavaScript Tests (tests.js)
```javascript
const { algorithmName } = require('./implementation');

// Test cases
console.log('Test 1: Normal case');
console.assert(algorithmName([1, 2, 3]) === expected);

console.log('Test 2: Edge case - empty');
console.assert(algorithmName([]) === null);

console.log('All tests passed!');
```

### Python Tests (tests.py)
```python
import unittest
from implementation import algorithm_name

class TestAlgorithm(unittest.TestCase):
    def test_normal_case(self):
        self.assertEqual(algorithm_name([1, 2, 3]), expected)

    def test_empty_input(self):
        self.assertIsNone(algorithm_name([]))

if __name__ == '__main__':
    unittest.main()
```

---

## Pull Request Process

### Before Submitting
- [ ] All implementations work correctly
- [ ] Tests pass
- [ ] Documentation is complete
- [ ] Visualization works
- [ ] Code follows style guidelines
- [ ] Committed with clear message

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New algorithm
- [ ] Bug fix
- [ ] Documentation improvement
- [ ] Visualization enhancement
- [ ] Tests added

## Algorithm Details (if applicable)
- **Category:** sorting/searching/etc.
- **Difficulty:** easy/medium/hard
- **Time Complexity:** O(?)
- **Space Complexity:** O(?)

## Checklist
- [ ] All 3 language implementations included
- [ ] Comprehensive README.md
- [ ] Interactive visualization
- [ ] Tests included and passing
- [ ] Examples provided
- [ ] Code follows style guide
```

### Review Process
1. Automated checks run
2. Maintainer reviews code
3. Feedback provided (if needed)
4. Approved and merged

---

## Community Guidelines

### Be Respectful
- Treat everyone with respect
- Welcome newcomers
- Provide constructive feedback
- Celebrate contributions

### Be Collaborative
- Help others learn
- Share knowledge
- Ask questions
- Suggest improvements

### Be Professional
- Follow guidelines
- Test your code
- Write clear documentation
- Respond to feedback

---

## Questions?

- **General questions:** Open a discussion
- **Bug reports:** Open an issue
- **Feature requests:** Open an issue
- **Security issues:** Email [maintainer email]

---

## Recognition

Contributors are recognized in:
- Contributors list in README
- GitHub contributors page
- Release notes

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making Classic Algorithms Codex better! 🎉
