"""Linear Search - O(n)"""

def linear_search(arr, target):
    """
    >>> linear_search([4, 2, 7, 1, 9], 7)
    2
    >>> linear_search([1, 2, 3], 5)
    -1
    >>> linear_search([], 1)
    -1
    """
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1

if __name__ == '__main__':
    import doctest
    r = doctest.testmod()
    print(f'✓ {r.attempted} tests passed!' if r.failed == 0 else f'✗ {r.failed} failed')
