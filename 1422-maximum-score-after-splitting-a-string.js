// 1422. Maximum Score After Splitting a String

// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

// Example 1:
// Input: s = "011101"
// Output: 5
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3

// Example 2:
// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

// Example 3:
// Input: s = "1111"
// Output: 3
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let i = 1, max = -Infinity;
    while(i<s.length) {
        max = Math.max(max, count(s.slice(0,i), 0) + count(s.slice(i),1));
        i++;
    }
    function count(a, x) {
        let total = 0;
        for(let c of a) if(c === x.toString()) total++;
        return total;
    }
    return max;
};

var maxScore = function(s) {
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        const left = s.slice(0, i).split('0').length - 1;
        const right = s.slice(i).split('1').length - 1;
        max = Math.max(max, left + right);
    }
    return max;
}
