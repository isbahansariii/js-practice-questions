// --------------FOLIO3 Queston#01-------------------
// Return square of each element in the given array

const toSquare = arr => arr.map(n => n*n);

console.log(toSquare([5, 7, 9, 10]))


// Same as:
/*
        function toSquare(arr)
        { 
            let newArr = arr.map(n => n*n);
            return newArr; 
        }
*/