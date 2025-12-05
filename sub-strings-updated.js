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
// so, if input is "aabbbcccaab" so, ouptupt should be {char: [b, c], length: 3}

const toFindMaxSubstring = (str)=>{
    if (!str)  return {char: [], length: 0};

    let currLen=1, maxLen=1;
    let maxChar = new Set(str[0]);

    for (let i=1; i<str.length; i++){

        //counting xurrent length
        if(str[i] === str[i-1])
            currLen++;
        else
            currLen = 1;

        // for max-length and character
        if(currLen > maxLen){
            maxLen = currLen;
            maxChar = new Set(str[i])   // remove previous and addd current
        }
        else if (currLen === maxLen) 
            maxChar.add(str[i])
    }
    return {char: [...maxChar], length: maxLen};   // [...maxChar] -> remove duplicates (if any)
}

console.log(toFindMaxSubstring("abc"));


// Complexity: O(n) 