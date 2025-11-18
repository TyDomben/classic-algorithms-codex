"""
Binary Search Algorithm

Efficient O(log n) search in sorted arrays

Time Complexity: O(log n)
Space Complexity: O(1) iterative, O(log n) recursive
"""

from typing import List, Optional


def binary_search(arr: List[int], target: int) -> int:
    """
    Iterative binary search.

    Args:
        arr: Sorted list of integers
        target: Value to find

    Returns:
        Index of target, or -1 if not found

    Examples:
        >>> binary_search([1, 3, 5, 7, 9], 7)
        3
        >>> binary_search([1, 3, 5, 7, 9], 4)
        -1
        >>> binary_search([1], 1)
        0
    """
    left, right = 0, len(arr) - 1

    while left <= right:
        # Avoid integer overflow
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1


def binary_search_recursive(arr: List[int], target: int,
                           left: int = 0, right: Optional[int] = None) -> int:
    """
    Recursive binary search.

    Args:
        arr: Sorted list of integers
        target: Value to find
        left: Left boundary
        right: Right boundary

    Returns:
        Index of target, or -1 if not found

    Examples:
        >>> binary_search_recursive([1, 3, 5, 7, 9], 5)
        2
        >>> binary_search_recursive([1, 3, 5, 7, 9], 10)
        -1
    """
    if right is None:
        right = len(arr) - 1

    if left > right:
        return -1

    mid = left + (right - left) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)


def binary_search_first(arr: List[int], target: int) -> int:
    """
    Find first occurrence of target.

    Examples:
        >>> binary_search_first([1, 2, 2, 2, 3], 2)
        1
    """
    left, right = 0, len(arr) - 1
    result = -1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            result = mid
            right = mid - 1  # Continue searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result


def binary_search_last(arr: List[int], target: int) -> int:
    """
    Find last occurrence of target.

    Examples:
        >>> binary_search_last([1, 2, 2, 2, 3], 2)
        3
    """
    left, right = 0, len(arr) - 1
    result = -1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            result = mid
            left = mid + 1  # Continue searching right
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result


if __name__ == '__main__':
    print('=== Binary Search Examples ===\n')

    arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    print(f'Array: {arr}')
    print(f'Find 7: {binary_search(arr, 7)}')
    print(f'Find 1: {binary_search(arr, 1)}')
    print(f'Find 19: {binary_search(arr, 19)}')
    print(f'Find 4 (not there): {binary_search(arr, 4)}')

    # With duplicates
    arr2 = [1, 2, 2, 2, 3, 4, 5]
    print(f'\nArray with duplicates: {arr2}')
    print(f'First occurrence of 2: {binary_search_first(arr2, 2)}')
    print(f'Last occurrence of 2: {binary_search_last(arr2, 2)}')

    # Run doctests
    print('\n=== Running Doctests ===')
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'All {results.attempted} tests passed!')
