// 168. Excel Sheet Column Title

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
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
// Input: columnNumber = 1
// Output: "A"

// Example 2:
// Input: columnNumber = 28
// Output: "AB"

// Example 3:
// Input: columnNumber = 701
// Output: "ZY"

// Example 4:
// Input: columnNumber = 2147483647
// Output: "FXSHRXW"
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        result = String.fromCharCode(64 + ( (columnNumber % 26) || 26) ) + result;
        columnNumber = Math.ceil( columnNumber / 26) - 1;
    };
    return result;
};
