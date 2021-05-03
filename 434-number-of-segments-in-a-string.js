// 434. Number of Segments in a String

// You are given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
// Input: s = "Hello"
// Output: 1

// Example 3:
// Input: s = "love live! mu'sic forever"
// Output: 4

// Example 4:
// Input: s = ""
// Output: 0

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(' ').filter(s => s && s.length).length;
};
