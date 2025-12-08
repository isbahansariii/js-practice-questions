# 📘 JavaScript Practice Problems

*A collection of JS logic-building and interview-style problems.*

---

# 📚 Table of Contents

1. [Array.prototype.last](#1️⃣-arrayprototypelast)
2. [Counter (Closure)](#2️⃣-counter-closure)
3. [Max Even-Length Subarray With Index](#3️⃣-max-even-length-subarray-with-index)

---

# 1️⃣ **Array.prototype.last**

**File:** `array-prototype-last.js`

### 📝 Problem Explanation

Extend JavaScript’s Array prototype by adding a method `.last()` that:

* Returns the **last element** of the array
* Returns **-1** if the array is empty

### 📥 Input

```js
const arr = [1, 2, 3, 9, 10];
const arr2 = [];
```

### 📤 Output

```js
arr.last();  // 10
arr2.last(); // -1
```

### 🧠 Concepts Used

* Prototype modification
* Array indexing
* Edge-case handling

---

# 2️⃣ **Counter (Closure)**

**File:** `counter.js`

### 📝 Problem Explanation

Implement a function `createCounter(n)` that returns **another function**.
Every time the returned function is called, it should:

* Return the **current count**
* Then increment the count
* Maintain state using **closures**

### 📥 Input

```js
const counter = createCounter(10);
counter();
counter();
counter();
```

### 📤 Output

```js
10
11
12
```

### 🧠 Concepts Used

* Lexical scope
* Closures
* State preservation without global variables

---

# 3️⃣ **Max Even-Length Subarray With Index**

**File:** `max-even-length-with-index.js`

### 📝 Problem Explanation

You are given a **2D array**.
For each inner array:

1. Calculate the sum
2. Check if the sum is **even**
3. Among all even-sum arrays, find the one with the **maximum length**

Return:

* `[maxLength, index]`
* If no even-sum array exists → return `[0, 0]`

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

### ✔ Why?

* `[2]` → even sum, length 1
* `[1,3,5]` → odd sum
* `[1,3,6]` → even sum, length 3
* `[3,3,3]` → odd sum
* `[2,2,2,2]` → even sum, **length 4 (max)**

So → return `[4, 4]`

### 🧠 Concepts Used

* 2D array traversal
* Using `reduce()`
* Even/odd check using `%`
* Tracking maximum values

---

# 4️⃣ **Palindrome Checker**

**File:** `plaindrome.js`

### 📝 Problem Explanation

A palindrome is a string that reads the **same forward and backward** (e.g., `"madam"`, `"121"`, `"racecar"`).
The task is to check whether the given string is a palindrome.

The steps:

1. Reverse the string
2. Compare it with the original
3. Print whether it is a palindrome or not

### 📥 Input

```js
checkPlaindrome("hello");
checkPlaindrome("madam");
```

### 📤 Output

```txt
hello is not a palindrome
madam is a palindrome
```

### 🧠 Concepts Used

* `split()`, `reverse()`, `join()`
* String comparison
* Basic conditional logic

---

# 5️⃣ **Prime Number Checker**

**File:** `prime-num.js`

### 📝 Problem Explanation

Determine whether a given number is:

* A **prime number**
* **Not prime**
* **Composite**
* **Zero**
* **Negative**

Logic:

* A prime number is divisible only by 1 and itself
* Loop from 2 → `num/2` for efficiency
* Track a boolean `isPrime`

### 📥 Input

```js
checkPrime(5);
checkPrime(1);
checkPrime(-7);
checkPrime(0);
checkPrime(10);
```

### 📤 Output

```txt
5 is a prime number.
1 is a composite number.
-7 is -ve or 0.
0 is -ve or 0.
10 is not a prime number.
```

### 🧠 Concepts Used

* Number theory basics
* Modulus `%`
* Looping with early checks
* Edge-case handling

---

# 6️⃣ **Sleep Function (Async Timeout)**

**File:** `sleep.js`

### 📝 Problem Explanation

Implement a custom `sleep(millis)` function that:

* Returns a **Promise**
* Resolves after the given number of milliseconds
* Works like a delay/wait function in async code

### 📥 Input

```js
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t);
});
```

### 📤 Output

```
~100
```

(not exact — depends on system timing)

### 🧠 Concepts Used

* Promises
* `setTimeout()`
* Async behavior in JavaScript

---
