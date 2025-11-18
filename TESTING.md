# Testing Guide

Comprehensive guide to running and understanding tests in Classic Algorithms Codex.

## Quick Start

### Run All Tests

**JavaScript:**
```bash
npm test
# or
node run-all-tests.js
```

**Expected output:**
```
╔════════════════════════════════════════════╗
║   Classic Algorithms Codex - Test Suite   ║
╚════════════════════════════════════════════╝

Found 4 test file(s)

... (test output) ...

🎉 All tests passed!
```

### Run Specific Algorithm Tests

```bash
# Bubble Sort
node algorithms/sorting/bubble-sort/tests.js

# Binary Search
node algorithms/searching/binary-search/tests.js

# FizzBuzz
node algorithms/classics/fizzbuzz/tests.js

# Fibonacci
node algorithms/math/fibonacci/tests.js
```

### Run Python Tests

Python tests use doctests and run automatically:

```bash
python3 algorithms/sorting/bubble-sort/implementation.py
python3 algorithms/searching/binary-search/implementation.py
python3 algorithms/classics/fizzbuzz/implementation.py
python3 algorithms/math/fibonacci/implementation.py
```

---

## Test Structure

### JavaScript Tests

Each algorithm has a `tests.js` file:

```javascript
// Example structure
const { algorithm } = require('./implementation');

let testsRun = 0;
let testsPassed = 0;

function assert(condition, testName) {
  testsRun++;
  if (condition) {
    testsPassed++;
    console.log(`✓ ${testName}`);
  } else {
    console.log(`✗ ${testName}`);
  }
}

// Test cases
assert(algorithm([1, 2, 3]) === expected, 'Basic test');
assert(algorithm([]) === expected, 'Edge case: empty');
// ... more tests

// Summary
console.log(`\nTotal: ${testsRun}, Passed: ${testsPassed}`);
process.exit(testsPassed === testsRun ? 0 : 1);
```

### Python Tests

Python uses doctests embedded in docstrings:

```python
def fibonacci(n: int) -> int:
    """
    Calculate nth Fibonacci number.

    Examples:
        >>> fibonacci(0)
        0
        >>> fibonacci(10)
        55
    """
    # implementation
```

Run with:
```bash
python3 -m doctest implementation.py -v
```

Or tests run automatically when executing the file.

---

## Test Categories

### 1. Basic Functionality Tests
Verify the algorithm works correctly:

```javascript
assert(bubbleSort([5, 2, 8]) equals [2, 5, 8], 'Basic sort');
assert(binarySearch([1, 3, 5], 3) === 1, 'Find element');
```

### 2. Edge Cases
Test boundaries and special cases:

```javascript
assert(algorithm([]) === expected, 'Empty input');
assert(algorithm([1]) === expected, 'Single element');
assert(algorithm(null) === expected, 'Null input');
```

### 3. Different Approaches
Verify alternative implementations:

```javascript
assert(bubbleSort(arr) equals bubbleSortOptimized(arr), 'Optimized matches');
assert(fibonacciNaive(10) === fibonacci(10), 'All approaches agree');
```

### 4. Performance Tests
For large inputs:

```javascript
const largeArr = Array.from({ length: 10000 }, (_, i) => i);
assert(binarySearch(largeArr, 5000) === 5000, 'Large array');
```

### 5. Stress Tests
Random inputs:

```javascript
for (let i = 0; i < 100; i++) {
  const arr = generateRandomArray();
  assert(isSorted(sort(arr)), `Random test ${i}`);
}
```

---

## Writing New Tests

### Template for JavaScript Tests

```javascript
/**
 * Algorithm Name - Test Suite
 */

const { myAlgorithm } = require('./implementation');

let testsRun = 0;
let testsPassed = 0;

function assert(condition, testName) {
  testsRun++;
  if (condition) {
    testsPassed++;
    console.log(`✓ ${testName}`);
  } else {
    console.log(`✗ ${testName}`);
  }
}

console.log('=== My Algorithm Tests ===\n');

// Group 1: Basic functionality
console.log('Basic Functionality:');
assert(myAlgorithm(input1) === expected1, 'Test 1');
assert(myAlgorithm(input2) === expected2, 'Test 2');

// Group 2: Edge cases
console.log('\nEdge Cases:');
assert(myAlgorithm([]) === expected, 'Empty input');
assert(myAlgorithm([1]) === expected, 'Single element');

// Group 3: Large inputs
console.log('\nLarge Inputs:');
const largeInput = /* generate */;
assert(myAlgorithm(largeInput) === expected, 'Large input');

// Summary
console.log('\n=== Test Summary ===');
console.log(`Total tests: ${testsRun}`);
console.log(`Passed: ${testsPassed}`);
console.log(`Failed: ${testsRun - testsPassed}`);

if (testsPassed === testsRun) {
  console.log('\n✓ All tests passed!');
  process.exit(0);
} else {
  console.log(`\n✗ ${testsRun - testsPassed} test(s) failed`);
  process.exit(1);
}
```

### Template for Python Doctests

```python
def my_algorithm(input: List[int]) -> int:
    """
    Brief description.

    Args:
        input: Description

    Returns:
        Description

    Examples:
        >>> my_algorithm([1, 2, 3])
        6

        >>> my_algorithm([])
        0

        >>> my_algorithm([5])
        5
    """
    # implementation
    pass


if __name__ == '__main__':
    # Run examples
    print('Examples:')
    print(my_algorithm([1, 2, 3]))

    # Run doctests
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'\n✓ All {results.attempted} tests passed!')
```

---

## Test Coverage

### What to Test

✅ **Always Test:**
- Basic functionality with normal inputs
- Empty inputs
- Single element inputs
- Edge values (min/max)
- Duplicates (if applicable)
- Already sorted (for sorting)
- Reverse sorted (for sorting)

✅ **Consider Testing:**
- Negative numbers
- Large inputs (performance)
- Null/undefined (JavaScript)
- Type mismatches
- Boundary conditions

❌ **Don't Over-Test:**
- Obvious cases
- Implementation details
- Language features

### Example Coverage

For Bubble Sort:
```javascript
// ✓ Basic sort
[5, 2, 8] → [2, 5, 8]

// ✓ Already sorted
[1, 2, 3] → [1, 2, 3]

// ✓ Reverse sorted
[3, 2, 1] → [1, 2, 3]

// ✓ Empty
[] → []

// ✓ Single element
[42] → [42]

// ✓ Duplicates
[3, 1, 3, 2] → [1, 2, 3, 3]

// ✓ Negative numbers
[-5, 2, -1] → [-5, -1, 2]

// ✓ Large array
[1000 random numbers] → sorted

// ✓ Custom comparator
Objects sorted by property
```

---

## Debugging Failed Tests

### Step 1: Read the Error
```
✗ Sort reverse sorted array
Expected: [1, 2, 3]
Actual: [1, 3, 2]
```

### Step 2: Isolate the Problem
```javascript
// Add logging
console.log('Input:', input);
console.log('Output:', output);
console.log('Expected:', expected);
```

### Step 3: Use Debugger
```javascript
// Node.js debugger
node inspect tests.js

// Or add breakpoints
debugger; // execution will pause here
```

### Step 4: Test Manually
```javascript
// Run the failing case directly
const result = bubbleSort([3, 2, 1]);
console.log(result); // see what you get
```

### Step 5: Check Implementation
- Review algorithm logic
- Check off-by-one errors
- Verify edge case handling

---

## Continuous Integration

### GitHub Actions (Future)

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - uses: actions/setup-python@v2

      - name: Run JavaScript tests
        run: npm test

      - name: Run Python tests
        run: python3 run-python-tests.py
```

---

## Performance Testing

### Measuring Time Complexity

```javascript
function testPerformance(algorithm, sizes = [100, 1000, 10000]) {
  sizes.forEach(size => {
    const input = generateInput(size);

    const start = Date.now();
    algorithm(input);
    const time = Date.now() - start;

    console.log(`n=${size}: ${time}ms`);
  });
}

testPerformance(bubbleSort);
// Expected: O(n²) - time should roughly 4x when n doubles
```

### Verifying Complexity

```javascript
// O(n²) verification
// If n doubles, time should ~4x

n=100:   10ms
n=200:   40ms  (4x)   ✓
n=400:   160ms (4x)   ✓
```

---

## Best Practices

### DO:
✅ Test edge cases thoroughly
✅ Use descriptive test names
✅ Group related tests
✅ Keep tests simple and focused
✅ Test both success and failure paths
✅ Use consistent assertion style

### DON'T:
❌ Skip edge cases
❌ Write overly complex tests
❌ Test implementation details
❌ Ignore failing tests
❌ Write tests that depend on each other
❌ Hardcode magic numbers without explanation

---

## Test Results

### Current Status

| Algorithm | JavaScript | Python | Status |
|-----------|-----------|--------|--------|
| Bubble Sort | 116/116 ✓ | 12/12 ✓ | ✅ Complete |
| Binary Search | 26/26 ✓ | 7/7 ✓ | ✅ Complete |
| FizzBuzz | 18/18 ✓ | 4/4 ✓ | ✅ Complete |
| Fibonacci | 54/54 ✓ | 12/12 ✓ | ✅ Complete |

**Total:** 214 JavaScript tests, 35 Python tests, 0 failures

---

## Contributing Tests

When adding new tests:

1. Follow the template above
2. Test all edge cases
3. Include performance tests for large inputs
4. Verify tests pass before submitting
5. Document any special test cases

See [CONTRIBUTING.md](docs/contributing.md) for more details.

---

## Common Issues

### Issue: Tests pass locally but fail in CI
**Solution:** Check for environment-specific code, random values, or timing issues

### Issue: Flaky tests (sometimes pass/fail)
**Solution:** Usually due to randomness or race conditions. Use fixed seeds for random tests.

### Issue: Tests are too slow
**Solution:** Reduce input sizes for repeated tests, or mark as slow tests

### Issue: Can't reproduce failure
**Solution:** Add more logging, check for edge cases, verify input/output types

---

## Resources

- [Jest Documentation](https://jestjs.io/) (if we add Jest later)
- [Python unittest](https://docs.python.org/3/library/unittest.html)
- [Python doctest](https://docs.python.org/3/library/doctest.html)

---

**Happy Testing!** 🧪

Found a bug? [Report it](https://github.com/yourusername/classic-algorithms-codex/issues)!
