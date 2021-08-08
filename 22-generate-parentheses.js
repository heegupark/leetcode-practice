// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const helper = (open, close, path = []) => {
        if (path.length === 2 * n) result.push(path.join(''));
        if (open < n) helper(open + 1, close, path.concat('('));
        if (open > close) helper(open, close + 1, path.concat(')'));
    };
    helper(0, 0, []);
    return result;
};
