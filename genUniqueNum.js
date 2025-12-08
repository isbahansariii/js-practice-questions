// Finding the unique element (where others are duplicates):
function genUniqueNum (arr){
    let newArr = []; //holds all unique numbers

    for (let i=0; i<arr.length; i++){
        let count = 0;
        for (let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]) count++;
        }
        if(count === 1) newArr.push(arr[i])
    }

    return newArr;
}

console.log(genUniqueNum(arr))  // [ 6, 8 ]


// using filter
function genUniqueNumUsingFilter (arr){
    let newArr = arr.filter(n => {
        return arr.indexOf(n) === arr.lastIndexOf(n)
    })
    return newArr
}

console.log(genUniqueNumUsingFilter(arr))
