// - Question: Find the length of the longest substring with character where the same character repeats continuously.
// Substring here DOES NOT mean “random pieces of string.”
// It means: A sequence of the SAME character appearing next to each other.

// Break the string "abbbccaab" by consecutive identical characters:
// a   ------------> length=1
// bbb ------------> length=3 (longest)
// cc  ------------> length=2
// aa  ------------> length=2
// b   ------------> length=1

// so, if input is "abbbccaab" so, ouptupt should be {char: b, length: 3}
// so, if input is "abbbcccaab" so, ouptupt should be {char: [b, c], length: 3}

const toFindMaxSubstring = (str)=>{
    let currLen = 1;
    let maxLen = 1;

    for (let i=0; i<str.length; i++){

        if(str[i] === str[i-1])
            currLen++;
        else
            currLen = 1;

        maxLen = Math.max(maxLen, currLen);
    }
    return maxLen;
}

console.log(toFindMaxSubstring("abbbbccccaab"));