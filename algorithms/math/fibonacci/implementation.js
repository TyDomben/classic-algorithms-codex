/**
 * Fibonacci Sequence
 *
 * Multiple implementations showing optimization progression
 */

/**
 * Naive Recursive - O(2ⁿ) time, O(n) space
 * SLOW - Only use for small n (< 40)
 */
function fibonacciNaive(n) {
  if (n <= 1) return n;
  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
}

/**
 * Memoization (Top-Down DP) - O(n) time, O(n) space
 * Much faster - solves each subproblem once
 */
function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

/**
 * Tabulation (Bottom-Up DP) - O(n) time, O(n) space
 * Builds solution iteratively
 */
function fibonacciTabulation(n) {
  if (n <= 1) return n;

  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

/**
 * Space-Optimized Iterative - O(n) time, O(1) space
 * BEST for most use cases
 */
function fibonacci(n) {
  if (n <= 1) return n;

  let prev = 0, curr = 1;

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}

/**
 * Generate first n Fibonacci numbers
 */
function fibonacciSequence(n) {
  const sequence = [];
  let prev = 0, curr = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(prev);
    [prev, curr] = [curr, prev + curr];
  }

  return sequence;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fibonacci,
    fibonacciNaive,
    fibonacciMemo,
    fibonacciTabulation,
    fibonacciSequence
  };
}

// Examples
if (typeof require !== 'undefined' && require.main === module) {
  console.log('=== Fibonacci Examples ===\n');

  console.log('First 15 Fibonacci numbers:');
  console.log(fibonacciSequence(15));

  console.log('\nF(10) =', fibonacci(10));
  console.log('F(20) =', fibonacci(20));
  console.log('F(50) =', fibonacci(50));

  // Performance comparison
  console.log('\n=== Performance Comparison ===');

  console.time('Naive F(35)');
  console.log('Naive:', fibonacciNaive(35));
  console.timeEnd('Naive F(35)');

  console.time('Optimized F(35)');
  console.log('Optimized:', fibonacci(35));
  console.timeEnd('Optimized F(35)');
}
