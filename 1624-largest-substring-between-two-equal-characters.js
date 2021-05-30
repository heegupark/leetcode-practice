// 1624. Largest Substring Between Two Equal Characters

// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

// Example 2:
// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".

// Example 3:
// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.

// Example 4:
// Input: s = "cabbac"
// Output: 4
// Explanation: The optimal substring here is "abba". Other non-optimal substrings include "bb" and "".
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map = {};
    let maxDist = -1;
    for(let i=0;i<s.length;i++) {
        if(map[s[i]] !== undefined) {
            let lastIdx = map[s[i]];
            let dist = i-lastIdx-1;
            maxDist = Math.max(maxDist, dist);
        } else {
            map[s[i]] = i;
        }
    }
    return maxDist;
};
