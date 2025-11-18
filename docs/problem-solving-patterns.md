# Problem-Solving Patterns

> Master these patterns to solve 90% of algorithm problems

## Table of Contents
- [Introduction](#introduction)
- [Pattern 1: Two Pointers](#pattern-1-two-pointers)
- [Pattern 2: Sliding Window](#pattern-2-sliding-window)
- [Pattern 3: Fast & Slow Pointers](#pattern-3-fast--slow-pointers)
- [Pattern 4: Merge Intervals](#pattern-4-merge-intervals)
- [Pattern 5: Cyclic Sort](#pattern-5-cyclic-sort)
- [Pattern 6: In-Place Reversal](#pattern-6-in-place-reversal)
- [Pattern 7: Tree BFS](#pattern-7-tree-bfs)
- [Pattern 8: Tree DFS](#pattern-8-tree-dfs)
- [Pattern 9: Two Heaps](#pattern-9-two-heaps)
- [Pattern 10: Subsets](#pattern-10-subsets)
- [Pattern 11: Modified Binary Search](#pattern-11-modified-binary-search)
- [Pattern 12: Top K Elements](#pattern-12-top-k-elements)
- [Pattern 13: K-Way Merge](#pattern-13-k-way-merge)
- [Pattern 14: Dynamic Programming](#pattern-14-dynamic-programming)
- [Pattern 15: Backtracking](#pattern-15-backtracking)

---

## Introduction

Most algorithm problems follow recognizable patterns. Learn these patterns, and you'll be able to identify and solve similar problems quickly.

**How to use this guide:**
1. Read the pattern description
2. Study the template code
3. Understand when to apply it
4. Practice with the examples

---

## Pattern 1: Two Pointers

### When to Use
- Sorted arrays
- Linked lists
- Finding pairs/triplets
- Removing duplicates
- Reversing

### Template

```javascript
function twoPointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Process elements at left and right
    // Move pointers based on condition

    if (condition) {
      left++;
    } else {
      right--;
    }
  }
}
```

### Example 1: Two Sum (Sorted Array)

```javascript
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;  // Need larger sum
    } else {
      right--; // Need smaller sum
    }
  }

  return null;
}
// Time: O(n), Space: O(1)
```

### Example 2: Remove Duplicates

```javascript
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let writeIndex = 1;

  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== arr[readIndex - 1]) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }

  return writeIndex;
}
// Time: O(n), Space: O(1)
```

### Example 3: Valid Palindrome

```javascript
function isPalindrome(s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
// Time: O(n), Space: O(1)
```

**Problems to Practice:**
- Three Sum
- Container With Most Water
- Trapping Rain Water

---

## Pattern 2: Sliding Window

### When to Use
- Contiguous subarrays/substrings
- Maximum/minimum in fixed-size window
- Longest/shortest substring with condition

### Template

```javascript
function slidingWindow(arr, k) {
  let windowStart = 0;
  let result = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add element at windowEnd to window

    // Shrink window if needed
    while (windowInvalid) {
      // Remove element at windowStart
      windowStart++;
    }

    // Update result
    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
}
```

### Example 1: Maximum Sum Subarray of Size K

```javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
// Time: O(n), Space: O(1)
```

### Example 2: Longest Substring Without Repeating Characters

```javascript
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If char seen, move start past its last occurrence
    if (seen.has(char)) {
      start = Math.max(start, seen.get(char) + 1);
    }

    seen.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
// Time: O(n), Space: O(min(n, charset))
```

### Example 3: Minimum Window Substring

```javascript
function minWindow(s, t) {
  const need = new Map();
  const window = new Map();

  // Count characters in t
  for (const char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0, right = 0;
  let valid = 0;
  let start = 0, minLen = Infinity;

  while (right < s.length) {
    const c = s[right];
    right++;

    // Update window
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    // Shrink window
    while (valid === need.size) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }

      const d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return minLen === Infinity ? "" : s.substr(start, minLen);
}
// Time: O(n), Space: O(k) where k is charset
```

**Problems to Practice:**
- Fruits Into Baskets
- Longest Repeating Character Replacement
- Permutation in String

---

## Pattern 3: Fast & Slow Pointers

### When to Use
- Linked list cycle detection
- Finding middle of linked list
- Palindrome linked list
- Happy number

### Template

```javascript
function fastSlowPointers(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;       // Move 1 step
    fast = fast.next.next;  // Move 2 steps

    if (slow === fast) {
      // Found cycle or reached goal
      return true;
    }
  }

  return false;
}
```

### Example 1: Linked List Cycle

```javascript
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;  // Cycle detected
    }
  }

  return false;
}
// Time: O(n), Space: O(1)
```

### Example 2: Middle of Linked List

```javascript
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;  // slow is at middle
}
// Time: O(n), Space: O(1)
```

### Example 3: Happy Number

```javascript
function isHappy(n) {
  function getNext(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
}
// Time: O(log n), Space: O(1)
```

**Problems to Practice:**
- Start of Linked List Cycle
- Palindrome Linked List
- Circular Array Loop

---

## Pattern 4: Merge Intervals

### When to Use
- Overlapping intervals
- Insert/merge/intersect intervals
- Meeting rooms problems

### Template

```javascript
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      // Overlapping, merge
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // Non-overlapping, add
      merged.push(current);
    }
  }

  return merged;
}
// Time: O(n log n), Space: O(n)
```

### Example: Insert Interval

```javascript
function insert(intervals, newInterval) {
  const result = [];
  let i = 0;

  // Add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
// Time: O(n), Space: O(n)
```

**Problems to Practice:**
- Meeting Rooms II
- Employee Free Time
- Interval List Intersections

---

## Pattern 5: Cyclic Sort

### When to Use
- Array contains numbers in range [1, n]
- Find missing/duplicate numbers
- Array should be sorted

### Template

```javascript
function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i] - 1;

    if (nums[i] !== nums[correctIndex]) {
      // Swap to correct position
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }
}
// Time: O(n), Space: O(1)
```

### Example: Find Missing Number

```javascript
function findMissingNumber(nums) {
  let i = 0;
  const n = nums.length;

  // Cyclic sort
  while (i < n) {
    const correctIndex = nums[i];
    if (nums[i] < n && nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  // Find missing
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
}
// Time: O(n), Space: O(1)
```

**Problems to Practice:**
- Find All Duplicates
- Find Corrupt Pair
- First Missing Positive

---

## Pattern 6: In-Place Reversal

### When to Use
- Reverse linked list
- Reverse part of linked list
- Rotate linked list

### Template

```javascript
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;  // New head
}
// Time: O(n), Space: O(1)
```

### Example: Reverse Between

```javascript
function reverseBetween(head, left, right) {
  if (left === right) return head;

  let prev = null;
  let current = head;

  // Move to position left
  for (let i = 0; i < left - 1; i++) {
    prev = current;
    current = current.next;
  }

  const connection = prev;
  const tail = current;

  // Reverse between left and right
  for (let i = 0; i < right - left + 1; i++) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Connect reversed part
  if (connection !== null) {
    connection.next = prev;
  } else {
    head = prev;
  }
  tail.next = current;

  return head;
}
// Time: O(n), Space: O(1)
```

**Problems to Practice:**
- Reverse K-Group
- Rotate List
- Swap Nodes in Pairs

---

## Pattern 7: Tree BFS

### When to Use
- Level-order traversal
- Zigzag traversal
- Minimum depth
- Connect level order siblings

### Template

```javascript
function treeBFS(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}
// Time: O(n), Space: O(n)
```

**Problems to Practice:**
- Binary Tree Level Order Traversal
- Zigzag Traversal
- Average of Levels
- Right View of Tree

---

## Pattern 8: Tree DFS

### When to Use
- Path problems
- Sum problems
- Counting paths
- Tree traversals (inorder, preorder, postorder)

### Template

```javascript
function treeDFS(root) {
  function dfs(node) {
    if (!node) return;

    // Preorder: process node first
    process(node);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
}
// Time: O(n), Space: O(h) where h is height
```

### Example: Path Sum

```javascript
function hasPathSum(root, targetSum) {
  if (!root) return false;

  // Leaf node
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return hasPathSum(root.left, targetSum - root.val) ||
         hasPathSum(root.right, targetSum - root.val);
}
// Time: O(n), Space: O(h)
```

**Problems to Practice:**
- All Paths for Sum
- Diameter of Tree
- Maximum Path Sum

---

## Pattern 14: Dynamic Programming

### When to Use
- Optimal substructure
- Overlapping subproblems
- Fibonacci-like problems
- Optimization problems (min/max)

### Template (Top-Down with Memoization)

```javascript
function dpTopDown(n, memo = {}) {
  // Base case
  if (n <= 1) return baseValue;

  // Check memo
  if (memo[n]) return memo[n];

  // Recursive case
  memo[n] = compute(dpTopDown(n - 1, memo), dpTopDown(n - 2, memo));

  return memo[n];
}
```

### Template (Bottom-Up)

```javascript
function dpBottomUp(n) {
  const dp = new Array(n + 1);

  // Base cases
  dp[0] = baseValue1;
  dp[1] = baseValue2;

  // Build up
  for (let i = 2; i <= n; i++) {
    dp[i] = compute(dp[i - 1], dp[i - 2]);
  }

  return dp[n];
}
```

**Problems to Practice:**
- Climbing Stairs
- House Robber
- Coin Change
- Longest Common Subsequence

---

## Pattern Recognition Guide

| Problem Keywords | Pattern |
|-----------------|---------|
| Sorted array, find pair | Two Pointers |
| Subarray/substring of size k | Sliding Window |
| Linked list cycle | Fast & Slow Pointers |
| Overlapping intervals | Merge Intervals |
| Numbers 1 to n | Cyclic Sort |
| Reverse linked list | In-Place Reversal |
| Level by level | Tree BFS |
| Path in tree | Tree DFS |
| K largest/smallest | Top K |
| Optimal solution, overlapping | DP |
| All combinations | Backtracking |

---

## Additional Resources

- [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/)
- [Algorithm Examples](../algorithms/)
- [Interview Prep Guide](interview-prep-guide.md)

---

**Practice Strategy:**
1. Pick a pattern
2. Solve 5-10 problems using that pattern
3. Move to next pattern
4. Review and mix patterns
