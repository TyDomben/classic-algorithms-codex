"""
Quick Sort Algorithm

Efficient divide-and-conquer sorting using partitioning

Time: O(n log n) average, O(n²) worst
Space: O(log n) stack space
"""

from typing import List
import random


def quick_sort(arr: List[int], left: int = 0, right: int = None) -> List[int]:
    """
    In-place quick sort.

    Examples:
        >>> quick_sort([8, 3, 1, 7, 0, 10, 2])
        [0, 1, 2, 3, 7, 8, 10]
        >>> quick_sort([5, 2, 8, 1, 9])
        [1, 2, 5, 8, 9]
        >>> quick_sort([1])
        [1]
        >>> quick_sort([])
        []
    """
    if right is None:
        right = len(arr) - 1

    if left < right:
        pivot_index = partition(arr, left, right)
        quick_sort(arr, left, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, right)

    return arr


def partition(arr: List[int], left: int, right: int) -> int:
    """Lomuto partition scheme."""
    pivot = arr[right]
    i = left - 1

    for j in range(left, right):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[right] = arr[right], arr[i + 1]
    return i + 1


def quick_sort_randomized(arr: List[int]) -> List[int]:
    """
    Randomized quick sort (functional style).

    Examples:
        >>> len(quick_sort_randomized([5, 2, 8, 1, 9])) == 5
        True
        >>> quick_sort_randomized([3, 1, 2])
        [1, 2, 3]
    """
    if len(arr) <= 1:
        return arr

    pivot = random.choice(arr)
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort_randomized(left) + middle + quick_sort_randomized(right)


def quick_sort_3way(arr: List[int], left: int = 0, right: int = None) -> List[int]:
    """
    Three-way partitioning for arrays with many duplicates.

    Examples:
        >>> quick_sort_3way([4, 2, 6, 2, 8, 2, 4])
        [2, 2, 2, 4, 4, 6, 8]
    """
    if right is None:
        right = len(arr) - 1

    if left >= right:
        return arr

    lt, gt = left, right
    pivot = arr[left]
    i = left

    while i <= gt:
        if arr[i] < pivot:
            arr[lt], arr[i] = arr[i], arr[lt]
            lt += 1
            i += 1
        elif arr[i] > pivot:
            arr[i], arr[gt] = arr[gt], arr[i]
            gt -= 1
        else:
            i += 1

    quick_sort_3way(arr, left, lt - 1)
    quick_sort_3way(arr, gt + 1, right)
    return arr


if __name__ == '__main__':
    print('=== Quick Sort Examples ===\n')

    arr1 = [8, 3, 1, 7, 0, 10, 2]
    print(f'Before: {arr1}')
    quick_sort(arr1)
    print(f'After: {arr1}')

    arr2 = [5, 2, 8, 1, 9, 3, 7, 4, 6]
    print(f'\nRandomized: {quick_sort_randomized(arr2)}')

    arr3 = [4, 2, 6, 2, 8, 2, 4]
    print(f'\n3-Way (duplicates):')
    quick_sort_3way(arr3)
    print(arr3)

    # Doctests
    import doctest
    results = doctest.testmod()
    if results.failed == 0:
        print(f'\n✓ All {results.attempted} doctests passed!')
