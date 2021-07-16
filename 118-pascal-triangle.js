// 118. Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal = new Array(numRows);
    for(let i=0;i<pascal.length;i++) {
        const array = [];
        array[0] = 1;
        array[i] = 1 ;
        for(let j = 1; j < i; j++)  array[j] = pascal[i-1][j] + pascal[i-1][j-1];
        pascal[i] = array;
    }
    return pascal;
};
