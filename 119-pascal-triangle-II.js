// 119. Pascal's Triangle II
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const pascal = new Array(rowIndex+1);
    for(let i=0;i<pascal.length;i++) {
        const array = [];
        array[0] = 1;
        array[i] = 1;
        for(let j=1;j<i;j++) array[j] = pascal[i-1][j] + pascal[i-1][j-1];
        pascal[i] = array;
    }
    return pascal[rowIndex];
};
