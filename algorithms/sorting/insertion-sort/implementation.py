"""
Insertion Sort Algorithm

Simple, efficient sorting for small datasets and nearly sorted data

Time: O(n) best, O(n²) average/worst
Space: O(1) in-place
Stable: Yes
"""

from typing import List, TypeVar, Callable


T = TypeVar('T')


def insertion_sort(arr: List[int]) -> List[int]:
    """
    Standard insertion sort.

    Args:
        arr: List of integers to sort

    Returns:
        The same list, sorted in-place

    Examples:
        >>> insertion_sort([5, 2, 4, 6, 1, 3])
        [1, 2, 3, 4, 5, 6]

        >>> insertion_sort([1, 2, 3, 4, 5])
        [1, 2, 3, 4, 5]

        >>> insertion_sort([5, 4, 3, 2, 1])
        [1, 2, 3, 4, 5]

        >>> insertion_sort([1])
        [1]

        >>> insertion_sort([])
        []

        >>> insertion_sort([3, 3, 3])
        [3, 3, 3]
    """
    # Start from second element
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        # Shift elements greater than key to the right
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        # Insert key at correct position
        arr[j + 1] = key

    return arr


def insertion_sort_generic(arr: List[T], key: Callable[[T], any] = None, reverse: bool = False) -> List[T]:
    """
    Generic insertion sort with optional key function and reverse.

    Args:
        arr: List to sort
        key: Optional key function for comparison
        reverse: If True, sort in descending order

    Returns:
        The same list, sorted in-place

    Examples:
        >>> insertion_sort_generic([5, 2, 8, 1, 9])
        [1, 2, 5, 8, 9]

        >>> insertion_sort_generic([5, 2, 8, 1, 9], reverse=True)
        [9, 8, 5, 2, 1]

        >>> insertion_sort_generic([-5, 2, -8, 1], key=abs)
        [1, 2, -5, -8]

        >>> people = [('Alice', 30), ('Bob', 25), ('Charlie', 35)]
        >>> insertion_sort_generic(people, key=lambda x: x[1])
        [('Bob', 25), ('Alice', 30), ('Charlie', 35)]
    """
    for i in range(1, len(arr)):
        item = arr[i]
        j = i - 1

        # Get comparison values
        item_val = key(item) if key else item

        while j >= 0:
            arr_val = key(arr[j]) if key else arr[j]

            # Compare based on reverse flag
            if reverse:
                if arr_val >= item_val:
                    break
            else:
                if arr_val <= item_val:
                    break

            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = item

    return arr


def binary_insertion_sort(arr: List[int]) -> List[int]:
    """
    Binary insertion sort - uses binary search to find position.

    Reduces comparisons but still O(n²) due to shifting.

    Args:
        arr: List of integers to sort

    Returns:
        The same list, sorted in-place

    Examples:
        >>> binary_insertion_sort([5, 2, 4, 6, 1, 3])
        [1, 2, 3, 4, 5, 6]

        >>> binary_insertion_sort([3, 2, 1])
        [1, 2, 3]
    """
    for i in range(1, len(arr)):
        key = arr[i]

        # Find position using binary search
        left, right = 0, i - 1

        while left <= right:
            mid = (left + right) // 2
            if arr[mid] > key:
                right = mid - 1
            else:
                left = mid + 1

        # Shift elements to make room
        for j in range(i - 1, left - 1, -1):
            arr[j + 1] = arr[j]

        # Insert at correct position
        arr[left] = key

    return arr


def insertion_sort_recursive(arr: List[int], n: int = None) -> List[int]:
    """
    Recursive insertion sort.

    Args:
        arr: List of integers to sort
        n: Number of elements to sort (defaults to len(arr))

    Returns:
        The same list, sorted in-place

    Examples:
        >>> insertion_sort_recursive([5, 2, 4, 1, 3])
        [1, 2, 3, 4, 5]

        >>> insertion_sort_recursive([1, 2, 3])
        [1, 2, 3]
    """
    if n is None:
        n = len(arr)

    # Base case
    if n <= 1:
        return arr

    # Sort first n-1 elements
    insertion_sort_recursive(arr, n - 1)

    # Insert last element at correct position
    key = arr[n - 1]
    j = n - 2

    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1

    arr[j + 1] = key

    return arr


if __name__ == '__main__':
    print('=== Insertion Sort Examples ===\n')

    # Basic example
    arr1 = [5, 2, 4, 6, 1, 3]
    print(f'Original: {arr1}')
    insertion_sort(arr1)
    print(f'Sorted:   {arr1}')

    # Binary insertion sort
    print('\n--- Binary Insertion Sort ---')
    arr2 = [64, 34, 25, 12, 22, 11, 90]
    print(f'Before: {arr2}')
    binary_insertion_sort(arr2)
    print(f'After:  {arr2}')

    # Descending
    print('\n--- Descending ---')
    arr3 = [5, 2, 8, 1, 9]
    print(f'Descending: {insertion_sort_generic(arr3.copy(), reverse=True)}')

    # By absolute value
    print('\n--- By Absolute Value ---')
    arr4 = [-5, 2, -8, 1, -9]
    insertion_sort_generic(arr4, key=abs)
    print(f'By abs: {arr4}')

    # Objects by property
    print('\n--- Objects by Property ---')
    people = [
        ('Alice', 30),
        ('Bob', 25),
        ('Charlie', 35)
    ]
    insertion_sort_generic(people, key=lambda x: x[1])
    print(f'By age: {people}')

    # Recursive
    print('\n--- Recursive ---')
    arr5 = [3, 1, 4, 1, 5, 9, 2, 6]
    print(f'Recursive: {insertion_sort_recursive(arr5.copy())}')

    # Run doctests
    print('\n--- Running Doctests ---')
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'✓ All {results.attempted} doctests passed!')
    else:
        print(f'✗ {results.failed} doctest(s) failed')
