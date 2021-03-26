// 392. Is Subsequence

// Given two strings s and t, check if s is a subsequence of t.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0, j=0;
    while(i<s.length){
        if(j===t.length) return false;
        if(s[i]===t[j]) i++;
        j++;
    }
    return true;
};
