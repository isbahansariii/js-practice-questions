// Identifying Unique Elements in an Array 
// Removing duplicates

let arr = [2, 6, 9, 8, 9, 2];
// arr = arr.sort();

function genUniqueArray (arr) {
    return [...new Set(arr)];
}
console.log(genUniqueArray(arr)) // [ 2, 6, 8, 9 ]
