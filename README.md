📘 JavaScript Practice Problems

A collection of JS logic-building and interview-style problems.

📚 Table of Contents

Array.prototype.last

Counter (Closure)

Max Even-Length Subarray With Index

1️⃣ Array.prototype.last

File: array-prototype-last.js

📝 Problem Explanation

Extend JavaScript’s Array prototype by adding a method .last() that:

Returns the last element of the array

Returns -1 if the array is empty

📥 Input
const arr = [1, 2, 3, 9, 10];
const arr2 = [];

📤 Output
arr.last();  // 10
arr2.last(); // -1

🧠 Concepts Used

Prototype modification

Array indexing

Edge-case handling

2️⃣ Counter (Closure)

File: counter.js

📝 Problem Explanation

Implement a function createCounter(n) that returns another function.
Every time the returned function is called, it should:

Return the current count

Then increment the count

Maintain state using closures

📥 Input
const counter = createCounter(10);
counter();
counter();
counter();

📤 Output
10
11
12

🧠 Concepts Used

Lexical scope

Closures

State preservation without global variables

3️⃣ Max Even-Length Subarray With Index

File: max-even-length-with-index.js

📝 Problem Explanation

You are given a 2D array.
For each inner array:

Calculate the sum

Check if the sum is even

Among all even-sum arrays, find the one with the maximum length

Return:

[maxLength, index]

If no even-sum array exists → return [0, 0]

📥 Input
[
  [2],
  [1, 3, 5],
  [1, 3, 6],
  [3, 3, 3],
  [2, 2, 2, 2]
]

📤 Output
[4, 4]

✔ Why?

[2] → even sum, length 1

[1,3,5] → odd sum

[1,3,6] → even sum, length 3

[3,3,3] → odd sum

[2,2,2,2] → even sum, length 4 (max)

So → return [4, 4]

🧠 Concepts Used

2D array traversal

Using reduce()

Even/odd check using %

Tracking maximum values