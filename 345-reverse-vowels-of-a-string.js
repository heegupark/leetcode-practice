// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelArr = [], tempArr = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(const c of s) {
        if(vowels.includes(c)) {
            vowelArr.push(c);
            tempArr.push('*')
        } else {
            tempArr.push(c);
        }
    }
    for(let i=0;i<tempArr.length;i++) {
        if(tempArr[i] === '*') tempArr[i] = vowelArr.pop();
    }
    return tempArr.join('')
};
