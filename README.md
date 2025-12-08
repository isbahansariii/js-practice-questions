# 📘 JavaScript Practice Problems

*A collection of JS logic-building and interview-style problems.*

---

# 📚 Table of Contents

1. [1️⃣ Array.prototype.last](#arrayprototypelast)
2. [2️⃣ Counter (Closure)](#counter-closure)
3. [3️⃣ Max Even-Length Subarray With Index](#max-even-length-subarray-with-index)
4. [4️⃣ Palindrome Checker](#palindrome-checker)
5. [5️⃣ Prime Number Checker](#prime-number-checker)
6. [6️⃣ Sleep Function (Async Timeout)](#sleep-function-async-timeout)
7. [7️⃣ Square of Array](#square-of-array)
8. [8️⃣ Character Count in String](#character-count-in-string)
9. [9️⃣ Max Consecutive Substring Length (Simple)](#max-consecutive-substring-length-simple)
10. [🔟 Max Consecutive Substring (Characters Included)](#max-consecutive-substring-characters-included)
11. [🎯 Two-Sum](#two-sum)
12. [🧹 Unique Elements in Array (Remove Duplicates)](#unique-elements-in-array-remove-duplicates)
13. [🥇 Find Numbers That Appear Only Once](#find-numbers-that-appear-only-once)

---

# 1️⃣ **Array.prototype.last**

**File:** `array-prototype-last.js`

### 📝 Problem Explanation

Extend JavaScript’s Array prototype by adding `.last()` that:

* Returns the **last element**
* Returns **-1** if the array is empty

### 📥 Input

```js
const arr = [1, 2, 3, 9, 10];
const arr2 = [];
```

### 📤 Output

```js
10
-1
```

### 🧠 Concepts Used

Prototype methods, indexing, edge cases

---

# 2️⃣ **Counter (Closure)**

**File:** `counter.js`

### 📝 Problem Explanation

`createCounter(n)` returns another function that:

* Returns the current count
* Increments it
* Uses a **closure** to preserve state

### 📥 Input

```js
const counter = createCounter(10);
counter();
counter();
counter();
```

### 📤 Output

```
10
11
12
```

### 🧠 Concepts Used

Closures, lexical scope, state management

---

# 3️⃣ **Max Even-Length Subarray With Index**

**File:** `max-even-length-with-index.js`

### 📝 Problem Explanation

Given a 2D array:

1. Compute sum of each inner array
2. Check whether sum is **even**
3. Track the **longest** even-sum array
4. Return `[maxLength, index]`

If none exist → return `[0, 0]`

### 📥 Input

```js
[
  [2],
  [1, 3, 5],
  [1, 3, 6],
  [3, 3, 3],
  [2, 2, 2, 2]
]
```

### 📤 Output

```js
[4, 4]
```

### 🧠 Concepts Used

2D traversal, `reduce()`, even check, max tracking

---

# 4️⃣ **Palindrome Checker**

**File:** `plaindrome.js`

### 📝 Problem Explanation

A palindrome reads the same forwards and backwards.
Logic:

1. Reverse string
2. Compare with original
3. Print result

### 📥 Input

```js
checkPlaindrome("hello");
checkPlaindrome("madam");
```

### 📤 Output

```
hello is not a palindrome
madam is a palindrome
```

### 🧠 Concepts Used

String reversal, conditionals, equality checking

---

# 5️⃣ **Prime Number Checker**

**File:** `prime-num.js`

### 📝 Problem Explanation

Checks whether a number is:

* Prime
* Composite
* Not prime
* Zero
* Negative

Loop from `2 → num/2` for efficiency.

### 📥 Input

```js
checkPrime(5);
checkPrime(1);
checkPrime(-7);
checkPrime(0);
checkPrime(10);
```

### 📤 Output

```
5 is a prime number.
1 is a composite number.
-7 is -ve or 0.
0 is -ve or 0.
10 is not a prime number.
```

### 🧠 Concepts Used

Loops, modulus, number theory basics

---

# 6️⃣ **Sleep Function (Async Timeout)**

**File:** `sleep.js`

### 📝 Problem Explanation

Implement a Promise-based delay.

### 📥 Input

```js
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));
```

### 📤 Output

```
~100
```

### 🧠 Concepts Used

Promises, async execution, timers

---

# 7️⃣ **Square of Array**

**File:** `squareOfArray.js`

### 📝 Problem Explanation

Return the **square** of every element in an array using `map()`.

### 📥 Input

```js
toSquare([5, 7, 9, 10]);
```

### 📤 Output

```js
[25, 49, 81, 100]
```

### 🧠 Concepts Used

`map()`, pure functions, array transformation

---

# 8️⃣ **Character Count in String**

**File:** `str-count.js`

### 📝 Problem Explanation

Count:

* How many times each character appears in a string
* Return an object where `key = character` and `value = count`

### 📥 Input

```js
"create a function that does every character count in the string."
```

### 📤 Output

```js
{
  c: 6,
  r: 4,
  e: 7,
  a: 4,
  ...
}
```

*(Actual values vary — example only)*

### 🧠 Concepts Used

Loops, object frequency map, string traversal

---

# 9️⃣ **Max Consecutive Substring Length (Simple)**

**File:** `sub-string.js`

### 📝 Problem Explanation

Find the **maximum number of consecutive repeating characters**, but **only return the length**.

Example:
`"abbbbccccaab"` → longest sequence is `"bbbb"` with length `4`.

### 📥 Input

```js
toFindMaxSubstring("abbbbccccaab")
```

### 📤 Output

```js
4
```

### 🧠 Concepts Used

Linear scan, streak counting, O(n) time complexity

---

# 🔟 **Max Consecutive Substring (Characters Included)**

**File:** `sub-string-updated.js`

### 📝 Problem Explanation

Improved version of previous problem:

Returns:

* `length` of longest repeating sequence
* All `characters` that achieve that max length
  (using a Set to avoid duplicates)

Example:
`"abc"` → max streak = 1, characters = `['a', 'b', 'c']`

### 📥 Input

```js
toFindMaxSubstring("abc");
```

### 📤 Output

```js
{ char: ['a', 'b', 'c'], length: 1 }
```

### 🧠 Concepts Used

Sets, duplicate handling, streak logic, O(n)

---

# 1️⃣1️⃣ **Two Sum**

**File:** `twoSum.js`

### 📝 Problem Explanation

Classic coding interview problem:
Given an array and a target sum, return the **indices** of the two numbers that add up to the target.

Brute force solution:

* Loop through each element
* For each index `i`, check every later index `j`
* Return `[i, j]` if `arr[i] + arr[j] === target`

### 📥 Input

```js
arr = [3, 2, 4];
target = 6;
```

### 📤 Output

```js
[1, 2]
```

### 🧠 Concepts Used

Nested loops, index pairing, brute-force lookup

---

# 1️⃣2️⃣ **Unique Elements in Array (Remove Duplicates)**

**File:** `uniqueNum-in-array.js`

### 📝 Problem Explanation

Extract all **unique values** from an array by removing duplicates.

Using `Set` automatically eliminates repeated values.

### 📥 Input

```js
[2, 6, 9, 8, 9, 2]
```

### 📤 Output

```js
[2, 6, 8, 9]
```

### 🧠 Concepts Used

`Set`, spread operator, duplicate removal

---

# 1️⃣3️⃣ **Find Numbers That Appear Only Once**

**File:** `genUniqueNum.js`

### 📝 Problem Explanation

Find numbers that appear **only once** in the array — all non-repeating values.

Two approaches:

### ✔ Approach 1: Nested Loops

Count frequency manually.
If a number appears exactly once → include it.

### ✔ Approach 2: Using `filter()`

If:

```
indexOf(n) === lastIndexOf(n)
```

→ It appears only once.

### 📥 Input

```js
[2, 6, 9, 8, 9, 2]
```

### 📤 Output

```js
[6, 8]
```

### 🧠 Concepts Used

Frequency counting, nested loops, `filter()`, `indexOf()`, `lastIndexOf()`

---
