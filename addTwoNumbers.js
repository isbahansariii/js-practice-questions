var addTwoNumbers = function(l1, l2) {
    
    let result = +(l1.reverse().join("")) + +(l2.reverse().join(""))

    return String(result).split('').map(Number).reverse();
};

let l1 = [2,4,3], l2 = [5,6,4];
console.log(addTwoNumbers(l1, l2));