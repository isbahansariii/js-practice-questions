// ----------------------- Folio3 Question#3 --------------------------

/*
PROBLEM:
You are given an array of arrays (2D array).
Example:
 [
  [2],
  [1, 3, 5],
  [1, 3, 5, 8],
  [3, 3, 3],
  [2, 2, 2, 2]
 ]

We need to find:
1. Arrays whose sum is even
2. Among those, the array(s) with the maximum length
3. Return max length and index of that array (or all arrays if multiple max lengths exist)
4. If no array has even sum, return [0,0]

*/

const maxEvenLength = (arr)=>{ //2d as an argument
    let maxLen = 0;
    let maxIndex = 0;

    for (let i=0; i<arr.length; i++){
        let sum = arr[i].reduce((a, b) => a+b, 0);
        
        if(sum%2 === 0 && arr[i].length > maxLen){
            maxLen = arr[i].length;
            maxIndex = i;
        }
    }

    return [maxLen, maxIndex];
}

let arr = [
    [2],
    [1, 3, 5],
    [1, 3, 6],
    [3, 3, 3],
    [2, 2, 2, 2],
];
console.log(maxEvenLength(arr));