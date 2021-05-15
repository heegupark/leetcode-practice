// 1408. String Matching in an Array

// Given an array of string words. Return all strings in words which is substring of another word in any order.
// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Example 1:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:
// Input: words = ["blue","green","bu"]
// Output: []
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    words.sort((a,b) => a.length - b.length)
    const result = [];
    while(words.length) {
        let temp = words.shift();
        for(let word of words) {
            if(word.includes(temp)) {
                result.push(temp);
                break;
            }
        }
    }
    return result;
};
