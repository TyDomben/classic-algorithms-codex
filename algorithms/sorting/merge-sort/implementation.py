"""
Merge Sort Algorithm

Efficient divide-and-conquer sorting with guaranteed O(n log n) performance

Time: O(n log n) all cases
Space: O(n) auxiliary space
Stable: Yes
"""

from typing import List, TypeVar, Callable


T = TypeVar('T')


def merge_sort(arr: List[int]) -> List[int]:
    """
    Standard recursive merge sort (functional style).

    Args:
        arr: List of integers to sort

    Returns:
        New sorted list

    Examples:
        >>> merge_sort([38, 27, 43, 3, 9, 82, 10])
        [3, 9, 10, 27, 38, 43, 82]

        >>> merge_sort([5, 2, 8, 1, 9])
        [1, 2, 5, 8, 9]

        >>> merge_sort([1])
        [1]

        >>> merge_sort([])
        []

        >>> merge_sort([5, 5, 5])
        [5, 5, 5]
    """
    # Base case: arrays of 0 or 1 element are already sorted
    if len(arr) <= 1:
        return arr

    # Divide: split array in half
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    # Conquer: recursively sort both halves
    sorted_left = merge_sort(left)
    sorted_right = merge_sort(right)

    # Combine: merge the sorted halves
    return merge(sorted_left, sorted_right)


def merge(left: List[int], right: List[int]) -> List[int]:
    """
    Merge two sorted arrays into one sorted array.

    Args:
        left: First sorted list
        right: Second sorted list

    Returns:
        Merged sorted list

    Examples:
        >>> merge([1, 3, 5], [2, 4, 6])
        [1, 2, 3, 4, 5, 6]

        >>> merge([1], [2])
        [1, 2]

        >>> merge([], [1, 2, 3])
        [1, 2, 3]
    """
    result = []
    i = j = 0

    # Compare elements from left and right, add smaller to result
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:  # <= ensures stability
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Copy any remaining elements
    result.extend(left[i:])
    result.extend(right[j:])

    return result


def merge_sort_in_place(arr: List[int], left: int = 0, right: int = None) -> List[int]:
    """
    In-place merge sort (modifies original array).

    Args:
        arr: List to sort
        left: Left boundary (default 0)
        right: Right boundary (default len(arr) - 1)

    Returns:
        The same list, sorted

    Examples:
        >>> arr = [38, 27, 43, 3, 9, 82, 10]
        >>> merge_sort_in_place(arr)
        [3, 9, 10, 27, 38, 43, 82]

        >>> arr = [5, 4, 3, 2, 1]
        >>> merge_sort_in_place(arr)
        [1, 2, 3, 4, 5]
    """
    if right is None:
        right = len(arr) - 1

    if left >= right:
        return arr

    mid = (left + right) // 2

    # Sort left and right halves
    merge_sort_in_place(arr, left, mid)
    merge_sort_in_place(arr, mid + 1, right)

    # Merge the sorted halves
    _merge_in_place(arr, left, mid, right)

    return arr


def _merge_in_place(arr: List[int], left: int, mid: int, right: int) -> None:
    """
    Merge two sorted sections of an array in-place.

    Args:
        arr: The list
        left: Start of left section
        mid: End of left section
        right: End of right section
    """
    # Create temporary arrays
    left_arr = arr[left:mid + 1]
    right_arr = arr[mid + 1:right + 1]

    i = j = 0
    k = left

    # Merge back into main array
    while i < len(left_arr) and j < len(right_arr):
        if left_arr[i] <= right_arr[j]:
            arr[k] = left_arr[i]
            i += 1
        else:
            arr[k] = right_arr[j]
            j += 1
        k += 1

    # Copy remaining elements
    while i < len(left_arr):
        arr[k] = left_arr[i]
        i += 1
        k += 1

    while j < len(right_arr):
        arr[k] = right_arr[j]
        j += 1
        k += 1


def merge_sort_iterative(arr: List[int]) -> List[int]:
    """
    Bottom-up iterative merge sort (avoids recursion).

    Args:
        arr: List to sort

    Returns:
        New sorted list

    Examples:
        >>> merge_sort_iterative([5, 2, 8, 1, 9, 3, 7])
        [1, 2, 3, 5, 7, 8, 9]

        >>> merge_sort_iterative([1, 2, 3])
        [1, 2, 3]
    """
    if len(arr) <= 1:
        return arr

    result = arr.copy()
    n = len(result)

    # Start with size 1, double each iteration
    size = 1
    while size < n:
        # Merge subarrays of current size
        start = 0
        while start < n:
            mid = min(start + size - 1, n - 1)
            end = min(start + 2 * size - 1, n - 1)

            if mid < end:
                # Merge result[start...mid] with result[mid+1...end]
                left = result[start:mid + 1]
                right = result[mid + 1:end + 1]
                merged = merge(left, right)

                # Copy back
                for i, val in enumerate(merged):
                    result[start + i] = val

            start += 2 * size
        size *= 2

    return result


def merge_sort_generic(arr: List[T], key: Callable[[T], any] = None) -> List[T]:
    """
    Generic merge sort with optional key function.

    Args:
        arr: List to sort
        key: Optional key function for comparison

    Returns:
        New sorted list

    Examples:
        >>> merge_sort_generic([5, 2, 8, 1, 9])
        [1, 2, 5, 8, 9]

        >>> merge_sort_generic([5, 2, 8, 1, 9], key=lambda x: -x)
        [9, 8, 5, 2, 1]

        >>> people = [('Alice', 30), ('Bob', 25), ('Charlie', 35)]
        >>> merge_sort_generic(people, key=lambda x: x[1])
        [('Bob', 25), ('Alice', 30), ('Charlie', 35)]
    """
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort_generic(arr[:mid], key)
    right = merge_sort_generic(arr[mid:], key)

    return _merge_generic(left, right, key)


def _merge_generic(left: List[T], right: List[T], key: Callable[[T], any] = None) -> List[T]:
    """
    Merge two sorted arrays with optional key function.

    Args:
        left: First sorted list
        right: Second sorted list
        key: Optional key function for comparison

    Returns:
        Merged sorted list
    """
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        left_val = key(left[i]) if key else left[i]
        right_val = key(right[j]) if key else right[j]

        if left_val <= right_val:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result


if __name__ == '__main__':
    print('=== Merge Sort Examples ===\n')

    # Basic example
    arr1 = [38, 27, 43, 3, 9, 82, 10]
    print(f'Original: {arr1}')
    print(f'Sorted:   {merge_sort(arr1)}')

    # In-place version
    print('\n--- In-Place Version ---')
    arr2 = [64, 34, 25, 12, 22, 11, 90]
    print(f'Before: {arr2}')
    merge_sort_in_place(arr2)
    print(f'After:  {arr2}')

    # Iterative version
    print('\n--- Iterative Version ---')
    arr3 = [5, 2, 8, 1, 9, 3, 7]
    print(f'Iterative: {merge_sort_iterative(arr3)}')

    # Generic with key
    print('\n--- Descending Order ---')
    arr4 = [5, 2, 8, 1, 9]
    print(f'Descending: {merge_sort_generic(arr4, key=lambda x: -x)}')

    # Objects by property
    print('\n--- Objects by Property ---')
    people = [
        ('Alice', 30),
        ('Bob', 25),
        ('Charlie', 35)
    ]
    sorted_by_age = merge_sort_generic(people, key=lambda x: x[1])
    print(f'By age: {sorted_by_age}')

    # Run doctests
    print('\n--- Running Doctests ---')
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'✓ All {results.attempted} doctests passed!')
    else:
        print(f'✗ {results.failed} doctest(s) failed')
