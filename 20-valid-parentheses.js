// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([)]"
// Output: false
// Example 5:
// Input: s = "{[]}"
// Output: true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const result = [];
    const array = s.split('');
    while(array.length) {
        let c = array.shift();
        if(c === '(') result.push(')');
        else if(c === '{') result.push('}');
        else if(c === '[') result.push(']');
        else {
            if(c === result.pop()) continue;
            else return false;
        }
    }
    return result.length === 0;
};
