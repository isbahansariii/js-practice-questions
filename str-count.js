// count every character count in the str-> k ek character kitni baar string mein aarha hai 
// count max occurance of the character in a string 

let str = "create a function that does every character count in the string.";

function charCount(str){
    let obj = {};
    
    for(let s of str){
        if(obj[s])
            obj[s]++;
        else
            obj[s] = 1;
    }
    return obj;
}

console.log(charCount(str))

// Output will be in object like: 
/* 
{
    a: 3, 
    b: 5,
}
*/
