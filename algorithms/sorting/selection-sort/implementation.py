"""Selection Sort - O(n²) time, O(1) space"""

from typing import List

def selection_sort(arr: List[int]) -> List[int]:
    """
    >>> selection_sort([64, 25, 12, 22, 11])
    [11, 12, 22, 25, 64]
    >>> selection_sort([1])
    [1]
    >>> selection_sort([])
    []
    >>> selection_sort([5, 4, 3, 2, 1])
    [1, 2, 3, 4, 5]
    """
    for i in range(len(arr) - 1):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

if __name__ == '__main__':
    import doctest
    r = doctest.testmod()
    print(f'✓ {r.attempted} doctests passed!' if r.failed == 0 else f'✗ {r.failed} failed')
