// 1047. Remove All Adjacent Duplicates In String

// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

// Example 1:
// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const result = [];
    S.split('').forEach(s => {
        if(result.length === 0) {
            result.push(s)
        } else {
          result[result.length-1] !== s  ? result.push(s) :  result.pop()
        }
    })
    return result.join('');
};
