function checkPrime (num) {

    let isPrime = true;

    // check if it is composite
    if(num === 1) console.log(`${num} is a composite number.`);

    // prime#
    else if(num >= 2){
        
        // num/2 to reduce complexity
        for(let i=2; i<=num/2; i++){
            if(num % i === 0)
                isPrime = false;
        }
        if (isPrime) console.log(`${num} is a prime number.`);
        else console.log(`${num} is not a prime number.`)
    }

    // check if it is 0 or negative
    else {
        console.log(`${num} is -ve or 0.`)
    }
}

checkPrime(5)   // prime#
checkPrime(1)   // composite#
checkPrime(-7)  // negative#
checkPrime(0)   // zero
checkPrime(10)  // !prime