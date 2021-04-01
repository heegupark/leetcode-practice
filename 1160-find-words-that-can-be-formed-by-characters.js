// 1160. Find Words That Can Be Formed by Characters

// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.

// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// Example 2:
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;
    for(let word of words) {
        let temp = chars;
        let isIn = true;
        for(let c of word) {
            const index = temp.indexOf(c)
            if(index !== -1) {
                temp = temp.substring(0,index) + temp.substring(index+1);
            } else {
                isIn = false;
                break;
            }
        }
        if(isIn) result += word.length;
    }
    return result;
};
console.log(countCharacters(["cat","bt","hat","tree"], "atach"))
