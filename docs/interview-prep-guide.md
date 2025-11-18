# Interview Preparation Guide

> Your roadmap to acing technical interviews

## Table of Contents
- [Overview](#overview)
- [Study Plan](#study-plan)
- [Essential Topics](#essential-topics)
- [Problem-Solving Framework](#problem-solving-framework)
- [Communication Tips](#communication-tips)
- [Common Mistakes](#common-mistakes)
- [Company-Specific Tips](#company-specific-tips)
- [Day Before & Day Of](#day-before--day-of)

---

## Overview

Technical interviews typically consist of:
1. **Behavioral questions** (20-30% of interview)
2. **Technical questions** (70-80% of interview)
   - Data structures & algorithms
   - System design (for senior roles)
   - Coding exercises

**What interviewers look for:**
- Problem-solving approach
- Code quality
- Communication skills
- Handling feedback
- Time/space complexity analysis
- Edge case consideration

---

## Study Plan

### 8-Week Preparation Schedule

#### Week 1-2: Foundations
**Focus:** Arrays, Strings, Hash Tables

**Daily:**
- 2-3 easy problems
- Review one concept thoroughly
- Write clean, commented code

**Topics:**
- Array manipulation
- String processing
- Hash map usage
- Two pointers technique

**Problems:**
- Two Sum
- Valid Anagram
- Reverse String
- Contains Duplicate
- Valid Parentheses
- Longest Substring Without Repeating Characters

---

#### Week 3-4: Core Algorithms
**Focus:** Sorting, Searching, Recursion

**Daily:**
- 2 easy, 1 medium problem
- Implement classic algorithms from scratch
- Practice explaining your approach

**Topics:**
- Binary search and variations
- Merge sort, Quick sort
- Recursion fundamentals
- Divide and conquer

**Problems:**
- Binary Search
- Search in Rotated Sorted Array
- Merge Sort implementation
- Pow(x, n)
- Generate Parentheses
- Permutations

---

#### Week 5-6: Data Structures
**Focus:** Linked Lists, Stacks, Queues, Trees

**Daily:**
- 2-3 medium problems
- Visualize data structures
- Practice without IDE (whiteboard style)

**Topics:**
- Linked list manipulation
- Stack/Queue applications
- Tree traversals (BFS, DFS)
- Binary search trees

**Problems:**
- Reverse Linked List
- Merge Two Sorted Lists
- Valid Palindrome (stack approach)
- Binary Tree Level Order Traversal
- Validate BST
- Lowest Common Ancestor

---

#### Week 7: Advanced Topics
**Focus:** Dynamic Programming, Graphs

**Daily:**
- 1-2 medium/hard problems
- Study multiple approaches
- Focus on pattern recognition

**Topics:**
- DP patterns (1D, 2D)
- Graph traversals
- Shortest path algorithms
- Backtracking

**Problems:**
- Climbing Stairs
- House Robber
- Coin Change
- Number of Islands
- Course Schedule
- Word Search

---

#### Week 8: Mock Interviews & Review
**Focus:** Practice under pressure

**Daily:**
- 2 timed problems (45 min each)
- Mock interview with peer
- Review mistakes

**Activities:**
- Use online mock interview platforms
- Practice with a friend
- Record yourself explaining solutions
- Review all flagged problems

---

### 4-Week Crash Course

If you only have 4 weeks, focus on the most common patterns:

**Week 1:** Arrays, Strings, Two Pointers, Sliding Window
**Week 2:** Linked Lists, Trees, BFS/DFS
**Week 3:** Dynamic Programming basics, Backtracking
**Week 4:** Practice & Mock Interviews

---

## Essential Topics

### Must-Know (Do NOT Skip)

#### 1. Arrays & Strings
- Two Sum variations
- Sliding window
- Two pointers
- String manipulation
- Palindromes

#### 2. Linked Lists
- Reversal
- Fast & slow pointers
- Cycle detection
- Merge operations

#### 3. Trees & Graphs
- BFS (level-order)
- DFS (inorder, preorder, postorder)
- Path problems
- Graph traversal

#### 4. Sorting & Searching
- Binary search
- Merge sort
- Quick sort
- When to sort first

#### 5. Hash Tables
- O(1) lookups
- Frequency counting
- Detecting duplicates

#### 6. Dynamic Programming
- 1D DP (Fibonacci, climbing stairs)
- 2D DP (longest common subsequence)
- Memoization vs tabulation

---

### Good to Know (If Time Permits)

- Heaps (Top K problems)
- Tries (Autocomplete)
- Union-Find
- Advanced DP
- Bit manipulation
- System design basics

---

## Problem-Solving Framework

Use this framework for EVERY problem:

### Step 1: Understand (5 minutes)
```
✓ Restate the problem in your own words
✓ Clarify inputs and outputs
✓ Ask about constraints
✓ Confirm edge cases
```

**Example questions to ask:**
- "Can the array be empty?"
- "Are all numbers positive?"
- "Should I modify the input or create new output?"
- "What should I return if no solution exists?"

---

### Step 2: Examples (5 minutes)
```
✓ Work through 2-3 examples
✓ Include edge cases
✓ Verify expected output
```

**Example:**
```
Problem: Find two numbers that add up to target

Input: [2, 7, 11, 15], target = 9
Output: [0, 1]  ← 2 + 7 = 9

Input: [3, 2, 4], target = 6
Output: [1, 2]  ← 2 + 4 = 6

Edge case: [3, 3], target = 6
Output: [0, 1]  ← Same number used twice
```

---

### Step 3: Brainstorm (5-10 minutes)
```
✓ Start with brute force
✓ Identify bottlenecks
✓ Think of similar problems
✓ Consider data structures
```

**Mental checklist:**
- Have I seen a similar problem?
- Would sorting help?
- Can I use a hash map for O(1) lookup?
- Is there a pattern here (two pointers, sliding window, etc.)?
- Can I break this into subproblems?

---

### Step 4: Choose Approach (2 minutes)
```
✓ Explain your approach
✓ Discuss time/space complexity
✓ Get feedback before coding
```

**Example:**
"I'll use a hash map to store numbers we've seen. For each number, I'll check if its complement exists in the map. This gives us O(n) time and O(n) space, which is better than the O(n²) brute force."

---

### Step 5: Code (15-20 minutes)
```
✓ Write clean, readable code
✓ Use meaningful variable names
✓ Add comments for complex logic
✓ Handle edge cases
```

**Tips:**
- Think out loud
- Explain as you type
- Ask if unsure about syntax
- Don't worry about perfection

---

### Step 6: Test (5-10 minutes)
```
✓ Walk through your code with example
✓ Check edge cases
✓ Look for off-by-one errors
✓ Verify time/space complexity
```

**Test cases to check:**
- Empty input
- Single element
- All same elements
- Sorted vs unsorted
- Negative numbers
- Maximum constraints

---

### Step 7: Optimize (If Time)
```
✓ Can we do better than O(n²)?
✓ Can we reduce space?
✓ Are there redundant operations?
```

---

## Communication Tips

### DO:
✅ **Think out loud** - Share your thought process
✅ **Ask clarifying questions** - Shows attention to detail
✅ **Explain trade-offs** - "This is O(n) time but O(n) space"
✅ **Admit when stuck** - "I'm not sure, can we discuss approaches?"
✅ **Accept hints gracefully** - "Ah, good point! So if I use a hash map..."
✅ **Be enthusiastic** - Show genuine interest

### DON'T:
❌ **Stay silent** - Interviewer can't help if they don't know where you're stuck
❌ **Jump straight to coding** - Always discuss approach first
❌ **Give up easily** - Show perseverance
❌ **Argue with hints** - Be receptive to feedback
❌ **Memorize solutions** - Understand the patterns instead
❌ **Rush** - Better to solve one problem well than two poorly

---

## Common Mistakes

### 1. Not Asking Questions
**Wrong:** Immediately start coding
**Right:** "Should I handle negative numbers? Can the array be empty?"

### 2. Poor Variable Names
**Wrong:** `x, y, z, temp, data`
**Right:** `targetSum, leftPointer, currentNode, maxSum`

### 3. Ignoring Edge Cases
**Wrong:** Assume input is always valid
**Right:** Check for null, empty, single element, duplicates

### 4. Inefficient First Attempt
**Wrong:** Stick with O(n²) solution
**Right:** "This is O(n²), but we can optimize with a hash map to O(n)"

### 5. Not Testing Code
**Wrong:** "I think this works"
**Right:** Walk through code with example step by step

### 6. Poor Time Management
**Wrong:** Spend 40 minutes on approach, rush coding
**Right:** Follow the time guidelines above

### 7. Giving Up When Stuck
**Wrong:** "I don't know"
**Right:** "I'm thinking about using X approach because..."

---

## Company-Specific Tips

### FAANG (Facebook/Meta, Amazon, Apple, Netflix, Google)
- **Focus:** Algorithms & system design
- **Difficulty:** Medium to hard
- **Style:** Optimize for both time and space
- **Expectation:** Clean code, strong communication
- **Rounds:** 4-6 rounds

### Microsoft
- **Focus:** Algorithms, OOP, system design
- **Difficulty:** Easy to hard
- **Style:** Practical coding ability
- **Expectation:** Collaborate well, ask questions

### Startups
- **Focus:** Practical problems, quick implementation
- **Difficulty:** Easy to medium (usually)
- **Style:** "Can you build features?"
- **Expectation:** Full-stack knowledge helpful

---

## Day Before & Day Of

### Day Before
- ✅ Review key patterns (don't learn new topics)
- ✅ Do 2-3 easy problems to warm up
- ✅ Get 8+ hours of sleep
- ✅ Prepare questions to ask interviewer
- ✅ Test your setup (webcam, mic, internet)

### Day Of
- ✅ Eat a good breakfast
- ✅ Arrive/log in 10 minutes early
- ✅ Have water, paper, pen ready
- ✅ Close all distractions
- ✅ Take deep breaths
- ✅ Be yourself!

---

## Sample Interview

### Problem: Two Sum

**You:** "Let me make sure I understand. We need to find two numbers in the array that add up to the target, and return their indices, right?"

**Interviewer:** "Correct."

**You:** "Can the same element be used twice? Are there always exactly two numbers that sum to target?"

**Interviewer:** "Each element can only be used once, and yes, assume exactly one solution exists."

**You:** "Great. Let me work through an example."
```
Input: [2, 7, 11, 15], target = 9
2 + 7 = 9, so return [0, 1]
```

**You:** "The brute force approach would be to check all pairs - that's O(n²) time. But I can optimize using a hash map to store numbers we've seen. As I iterate, I'll check if target - current number exists in the map. This gives O(n) time and O(n) space. Should I proceed with this approach?"

**Interviewer:** "Yes, sounds good."

**You:** "Okay, let me code this up..."

```javascript
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return null; // No solution (though problem states one exists)
}
```

**You:** "Let me walk through this with the example..."
[Walk through code step by step]

**You:** "This is O(n) time since we iterate once, and O(n) space for the hash map."

---

## Resources

### Practice Platforms
- LeetCode (most popular)
- HackerRank
- AlgoExpert
- Pramp (mock interviews)
- interviewing.io (mock interviews)

### Books
- "Cracking the Coding Interview" by Gayle Laakmann McDowell
- "Elements of Programming Interviews"

### This Repository
- [Algorithm Implementations](../algorithms/)
- [Problem-Solving Patterns](problem-solving-patterns.md)
- [Big-O Cheat Sheet](big-o-cheatsheet.md)
- [Interactive Visualizations](../visualizations/index.html)

---

## Final Thoughts

**Remember:**
1. Interviews are a skill - you improve with practice
2. It's okay to not know everything
3. Communication matters as much as coding
4. Every interview is a learning opportunity
5. Stay positive and confident

**You've got this!** 🚀

---

Good luck with your interviews! Come back to this guide regularly during your preparation.
