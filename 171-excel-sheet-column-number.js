// 171. Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

// Example 4:
// Input: columnTitle = "FXSHRXW"
// Output: 2147483647
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (const c of columnTitle) result = result * 26 + (c.charCodeAt(0) - 65 + 1);
    return result;
};
