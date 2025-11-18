"""
Bubble Sort Algorithm

A simple comparison-based sorting algorithm that repeatedly steps through
the list, compares adjacent elements, and swaps them if they're in the
wrong order.

Time Complexity:
    - Best Case: O(n) - when array is already sorted
    - Average Case: O(n²)
    - Worst Case: O(n²) - when array is reverse sorted

Space Complexity: O(1) - in-place sorting algorithm
"""

from typing import List, TypeVar, Callable, Any
import time
import random

T = TypeVar('T')


def bubble_sort(arr: List[int]) -> List[int]:
    """
    Basic bubble sort implementation.

    Args:
        arr: List of integers to sort

    Returns:
        Sorted list (modifies in place)

    Examples:
        >>> bubble_sort([64, 34, 25, 12, 22, 11, 90])
        [11, 12, 22, 25, 34, 64, 90]

        >>> bubble_sort([5, 2, 8, 1, 9])
        [1, 2, 5, 8, 9]

        >>> bubble_sort([1])
        [1]

        >>> bubble_sort([])
        []
    """
    # Edge case: empty or single element
    if len(arr) <= 1:
        return arr

    n = len(arr)

    # Outer loop: controls number of passes
    for i in range(n - 1):
        # Inner loop: compares adjacent elements
        # Range decreases each pass as largest elements bubble to end
        for j in range(n - i - 1):
            # Swap if current element is greater than next
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


def bubble_sort_optimized(arr: List[int]) -> List[int]:
    """
    Optimized bubble sort with early exit.

    Stops early if no swaps occur in a pass (array is sorted).

    Args:
        arr: List of integers to sort

    Returns:
        Sorted list (modifies in place)

    Examples:
        >>> bubble_sort_optimized([1, 2, 3, 5, 4])
        [1, 2, 3, 4, 5]

        >>> bubble_sort_optimized([5, 4, 3, 2, 1])
        [1, 2, 3, 4, 5]
    """
    if len(arr) <= 1:
        return arr

    n = len(arr)

    for i in range(n - 1):
        swapped = False

        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        # Early exit if no swaps occurred
        if not swapped:
            break

    return arr


def bubble_sort_with_steps(arr: List[int]) -> List[dict]:
    """
    Bubble sort that returns each step for visualization.

    Args:
        arr: List of integers to sort

    Returns:
        List of dictionaries containing array state at each step

    Example:
        >>> steps = bubble_sort_with_steps([5, 2, 8])
        >>> len(steps) > 0
        True
    """
    steps = []
    working_arr = arr.copy()
    n = len(working_arr)

    # Initial state
    steps.append({
        'array': working_arr.copy(),
        'comparing': [],
        'swapped': False,
        'description': 'Initial unsorted array'
    })

    for i in range(n - 1):
        swapped_in_pass = False

        for j in range(n - i - 1):
            # Show comparison
            steps.append({
                'array': working_arr.copy(),
                'comparing': [j, j + 1],
                'swapped': False,
                'description': f'Pass {i + 1}: Comparing {working_arr[j]} and {working_arr[j + 1]}'
            })

            if working_arr[j] > working_arr[j + 1]:
                # Perform swap
                working_arr[j], working_arr[j + 1] = working_arr[j + 1], working_arr[j]
                swapped_in_pass = True

                # Show swap result
                steps.append({
                    'array': working_arr.copy(),
                    'comparing': [j, j + 1],
                    'swapped': True,
                    'description': f'Swapped {working_arr[j + 1]} and {working_arr[j]}'
                })

        # Mark end of pass
        steps.append({
            'array': working_arr.copy(),
            'comparing': [],
            'swapped': False,
            'description': f'Pass {i + 1} complete. Position {n - i - 1} is now sorted.'
        })

        if not swapped_in_pass:
            steps.append({
                'array': working_arr.copy(),
                'comparing': [],
                'swapped': False,
                'description': 'No swaps occurred - array is sorted!'
            })
            break

    # Final state
    steps.append({
        'array': working_arr.copy(),
        'comparing': [],
        'swapped': False,
        'description': 'Sorting complete!'
    })

    return steps


def bubble_sort_descending(arr: List[int]) -> List[int]:
    """
    Bubble sort in descending order.

    Args:
        arr: List of integers to sort

    Returns:
        List sorted in descending order

    Examples:
        >>> bubble_sort_descending([5, 2, 8, 1, 9])
        [9, 8, 5, 2, 1]
    """
    if len(arr) <= 1:
        return arr

    n = len(arr)
    swapped = True

    for i in range(n - 1):
        swapped = False

        for j in range(n - i - 1):
            # Reversed condition for descending order
            if arr[j] < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break

    return arr


def bubble_sort_custom(arr: List[T], key: Callable[[T], Any] = None,
                      reverse: bool = False) -> List[T]:
    """
    Bubble sort with custom key function.

    Args:
        arr: List to sort
        key: Function to extract comparison key from each element
        reverse: If True, sort in descending order

    Returns:
        Sorted list

    Examples:
        >>> # Sort by absolute value
        >>> bubble_sort_custom([-5, 2, -8, 1, 9], key=abs)
        [1, 2, -5, -8, 9]

        >>> # Sort strings by length
        >>> bubble_sort_custom(['apple', 'pie', 'banana'], key=len)
        ['pie', 'apple', 'banana']

        >>> # Sort tuples by second element
        >>> bubble_sort_custom([(1, 3), (2, 1), (3, 2)], key=lambda x: x[1])
        [(2, 1), (3, 2), (1, 3)]
    """
    if len(arr) <= 1:
        return arr

    n = len(arr)

    # Default key function is identity
    if key is None:
        key = lambda x: x

    for i in range(n - 1):
        swapped = False

        for j in range(n - i - 1):
            # Compare using key function
            compare_result = key(arr[j]) > key(arr[j + 1])

            # Reverse comparison if descending order
            if reverse:
                compare_result = not compare_result

            if compare_result:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break

    return arr


def main():
    """Example usage and demonstrations."""

    print('=== Bubble Sort Examples ===\n')

    # Example 1: Basic sorting
    print('Example 1: Basic Bubble Sort')
    arr1 = [64, 34, 25, 12, 22, 11, 90]
    print(f'Before: {arr1}')
    bubble_sort(arr1)
    print(f'After: {arr1}\n')

    # Example 2: Optimized version
    print('Example 2: Optimized Bubble Sort (Nearly Sorted)')
    arr2 = [1, 2, 3, 5, 4, 6, 7]
    print(f'Before: {arr2}')
    bubble_sort_optimized(arr2)
    print(f'After: {arr2}\n')

    # Example 3: Descending order
    print('Example 3: Descending Order')
    arr3 = [5, 2, 8, 1, 9]
    print(f'Before: {arr3}')
    bubble_sort_descending(arr3)
    print(f'After: {arr3}\n')

    # Example 4: Custom key (sort by absolute value)
    print('Example 4: Custom Key (by absolute value)')
    arr4 = [-5, 2, -8, 1, 9]
    print(f'Before: {arr4}')
    bubble_sort_custom(arr4, key=abs)
    print(f'After: {arr4}\n')

    # Example 5: Sorting objects
    print('Example 5: Sorting Dictionaries by Age')
    people = [
        {'name': 'Alice', 'age': 30},
        {'name': 'Bob', 'age': 25},
        {'name': 'Charlie', 'age': 35}
    ]
    print('Before:', people)
    bubble_sort_custom(people, key=lambda x: x['age'])
    print('After:', people)
    print()

    # Performance comparison
    print('=== Performance Comparison ===')
    sizes = [10, 100, 1000]

    for size in sizes:
        # Generate random array
        random_arr = [random.randint(1, 1000) for _ in range(size)]

        # Test regular bubble sort
        arr1 = random_arr.copy()
        start1 = time.time()
        bubble_sort(arr1)
        time1 = (time.time() - start1) * 1000  # Convert to ms

        # Test optimized bubble sort
        arr2 = random_arr.copy()
        start2 = time.time()
        bubble_sort_optimized(arr2)
        time2 = (time.time() - start2) * 1000  # Convert to ms

        print(f'Size {size}:')
        print(f'  Regular: {time1:.2f}ms')
        print(f'  Optimized: {time2:.2f}ms')


if __name__ == '__main__':
    # Run examples
    main()

    # Run doctests
    print('\n=== Running Doctests ===')
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'All {results.attempted} tests passed!')
    else:
        print(f'{results.failed} of {results.attempted} tests failed.')
