function checkPlaindrome (str){
    let reversed = str.split('').reverse().join('');
    if (str === reversed) console.log(`${str} is a plaindrome`)
    else console.log(`${str} is not a plaindrome`)
}

// checkPlaindrome(101);
checkPlaindrome("hello")
checkPlaindrome("madam")
// checkPlaindrome(1212)