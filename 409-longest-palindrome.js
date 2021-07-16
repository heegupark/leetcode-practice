// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1

// Example 3:
// Input: s = "bb"
// Output: 2
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const count = {};
    for(let item of s) count[item] = count[item] ? ++count[item] : 1;
    let odds = 0;
    for(let key in count) odds += count[key] % 2;
    return s.length - odds + !!odds;
};
