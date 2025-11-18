"""
FizzBuzz - Classic Programming Problem

Print numbers 1 to n, replacing:
- Multiples of 3 with "Fizz"
- Multiples of 5 with "Buzz"
- Multiples of both with "FizzBuzz"
"""

from typing import List, Tuple


def fizzbuzz(n: int) -> List[str | int]:
    """
    Classic FizzBuzz implementation.

    Args:
        n: Upper limit (inclusive)

    Returns:
        List of FizzBuzz output

    Examples:
        >>> fizzbuzz(15)[-1]
        'FizzBuzz'
        >>> fizzbuzz(3)
        [1, 2, 'Fizz']
    """
    result = []

    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append('FizzBuzz')
        elif i % 3 == 0:
            result.append('Fizz')
        elif i % 5 == 0:
            result.append('Buzz')
        else:
            result.append(i)

    return result


def fizzbuzz_alt(n: int) -> List[str | int]:
    """
    Alternative FizzBuzz using string building.

    Examples:
        >>> fizzbuzz_alt(5)
        [1, 2, 'Fizz', 4, 'Buzz']
    """
    result = []

    for i in range(1, n + 1):
        output = ''
        if i % 3 == 0:
            output += 'Fizz'
        if i % 5 == 0:
            output += 'Buzz'
        result.append(output if output else i)

    return result


def fizzbuzz_extensible(n: int,
                       rules: List[Tuple[int, str]] = None) -> List[str | int]:
    """
    Extensible FizzBuzz with custom rules.

    Args:
        n: Upper limit
        rules: List of (divisor, word) tuples

    Examples:
        >>> fizzbuzz_extensible(7, [(3, 'Fizz'), (7, 'Bazz')])
        [1, 2, 'Fizz', 4, 5, 'Fizz', 'Bazz']
    """
    if rules is None:
        rules = [(3, 'Fizz'), (5, 'Buzz')]

    result = []

    for i in range(1, n + 1):
        output = ''
        for divisor, word in rules:
            if i % divisor == 0:
                output += word
        result.append(output if output else i)

    return result


if __name__ == '__main__':
    print('FizzBuzz (1-20):')
    print(', '.join(map(str, fizzbuzz(20))))

    print('\nFizzBuzz Extensible with custom rules (1-15):')
    print(', '.join(map(str, fizzbuzz_extensible(15, [(3, 'Fizz'), (5, 'Buzz'), (7, 'Bazz')]))))

    # Run doctests
    print('\n=== Running Doctests ===')
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'All {results.attempted} tests passed!')
