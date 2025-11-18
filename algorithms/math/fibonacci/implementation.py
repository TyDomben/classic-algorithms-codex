"""
Fibonacci Sequence

Multiple implementations showing optimization progression

Time Complexity ranges from O(2ⁿ) to O(n)
Space Complexity ranges from O(n) to O(1)
"""

from typing import List, Dict
import time


def fibonacci_naive(n: int) -> int:
    """
    Naive recursive - O(2ⁿ) time, O(n) space
    SLOW - Only use for small n (< 40)

    Examples:
        >>> fibonacci_naive(10)
        55
        >>> fibonacci_naive(5)
        5
    """
    if n <= 1:
        return n
    return fibonacci_naive(n - 1) + fibonacci_naive(n - 2)


def fibonacci_memo(n: int, memo: Dict[int, int] = None) -> int:
    """
    Memoization (Top-Down DP) - O(n) time, O(n) space

    Examples:
        >>> fibonacci_memo(10)
        55
        >>> fibonacci_memo(50)
        12586269025
    """
    if memo is None:
        memo = {}

    if n <= 1:
        return n
    if n in memo:
        return memo[n]

    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]


def fibonacci_tabulation(n: int) -> int:
    """
    Tabulation (Bottom-Up DP) - O(n) time, O(n) space

    Examples:
        >>> fibonacci_tabulation(10)
        55
        >>> fibonacci_tabulation(20)
        6765
    """
    if n <= 1:
        return n

    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])

    return dp[n]


def fibonacci(n: int) -> int:
    """
    Space-Optimized Iterative - O(n) time, O(1) space
    BEST for most use cases

    Examples:
        >>> fibonacci(10)
        55
        >>> fibonacci(20)
        6765
        >>> fibonacci(0)
        0
        >>> fibonacci(1)
        1
    """
    if n <= 1:
        return n

    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr

    return curr


def fibonacci_sequence(n: int) -> List[int]:
    """
    Generate first n Fibonacci numbers.

    Args:
        n: Number of Fibonacci numbers to generate

    Returns:
        List of first n Fibonacci numbers

    Examples:
        >>> fibonacci_sequence(10)
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        >>> fibonacci_sequence(5)
        [0, 1, 1, 2, 3]
    """
    if n <= 0:
        return []

    sequence = []
    prev, curr = 0, 1

    for _ in range(n):
        sequence.append(prev)
        prev, curr = curr, prev + curr

    return sequence


if __name__ == '__main__':
    print('=== Fibonacci Examples ===\n')

    print('First 15 Fibonacci numbers:')
    print(fibonacci_sequence(15))

    print(f'\nF(10) = {fibonacci(10)}')
    print(f'F(20) = {fibonacci(20)}')
    print(f'F(50) = {fibonacci(50)}')

    # Performance comparison
    print('\n=== Performance Comparison ===')

    n = 35

    start = time.time()
    result_naive = fibonacci_naive(n)
    time_naive = (time.time() - start) * 1000

    start = time.time()
    result_opt = fibonacci(n)
    time_opt = (time.time() - start) * 1000

    print(f'Naive F({n}): {result_naive} ({time_naive:.3f}ms)')
    print(f'Optimized F({n}): {result_opt} ({time_opt:.3f}ms)')
    print(f'Speedup: {time_naive / time_opt:.0f}x faster!')

    # Run doctests
    print('\n=== Running Doctests ===')
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'All {results.attempted} tests passed!')
